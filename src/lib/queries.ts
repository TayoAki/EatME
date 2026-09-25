import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { AddDoseBody, AddSymptomsBody, Glp1Response, Glp1Settings } from '@/shared/glp1';
import type { WeeklyInsights } from '@/shared/insights';
import type { BillingStatus } from '@/shared/billing';
import type { Features } from '@/shared/features';
import type { FoodSummary, Meal, QuickMeal, UpdateMealBody, UpdateMealItemsBody } from '@/shared/meals';
import type { NutrientDay } from '@/shared/nutrients';
import type { Product } from '@/shared/products';
import type { SupplementBody, SupplementsDay } from '@/shared/supplements';
import type { SaveOnboardingBody } from '@/shared/onboarding';
import type { MeResponse, StreakResponse, UpdateProfileBody } from '@/shared/user';
import type { WaterDay, WaterEntry } from '@/shared/water';
import type { AddWeightBody, WeightEntry, WeightHistory } from '@/shared/weight';

import { ApiError, useApi } from './api';
import { useSession } from './auth-client';
import { todayIso } from './time';

export const queryKeys = {
  me: (userId: string | null | undefined) => ['me', userId] as const,
  mealsAll: (userId: string | null | undefined) => ['meals', userId] as const,
  meals: (userId: string | null | undefined, date: string) => ['meals', userId, date] as const,
  meal: (userId: string | null | undefined, id: string) => ['meal', userId, id] as const,
  streak: (userId: string | null | undefined) => ['streak', userId] as const,
  waterAll: (userId: string | null | undefined) => ['water', userId] as const,
  water: (userId: string | null | undefined, date: string) => ['water', userId, date] as const,
  favorites: (userId: string | null | undefined) => ['favorites', userId] as const,
  insights: (userId: string | null | undefined) => ['insights', userId] as const,
  glp1: (userId: string | null | undefined) => ['glp1', userId] as const,
  nutrientsAll: (userId: string | null | undefined) => ['nutrients', userId] as const,
  supplementsAll: (userId: string | null | undefined) => ['supplements', userId] as const,
  supplements: (userId: string | null | undefined, date: string) => ['supplements', userId, date] as const,
  nutrients: (userId: string | null | undefined, date: string) => ['nutrients', userId, date] as const,
  weights: (userId: string | null | undefined) => ['weights', userId] as const,
  billing: (userId: string | null | undefined) => ['billing', userId] as const,
};

/** Earlier days are sent as `date`; today logs at "now". */
const dayParam = (date: string) => (date === todayIso() ? undefined : date);

export function useMe() {
  const { isSignedIn, userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.me(userId),
    queryFn: () => api<MeResponse>('/api/me'),
    enabled: !!isSignedIn,
    staleTime: 5 * 60_000,
  });
}

/** Profile of the signed-in user — null only for a moment while signing out. */
export function useProfile() {
  const { data } = useMe();
  return data?.user ?? null;
}

export function useMeals(date: string) {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.meals(userId, date),
    queryFn: () => api<{ meals: Meal[] }>(`/api/meals?date=${date}`),
    // Keep refreshing while a meal is still being analyzed in the background.
    refetchInterval: (query) =>
      query.state.data?.meals?.some((meal) => meal.status === 'analyzing') ? 3000 : false,
  });
}

export function useMeal(id: string) {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.meal(userId, id),
    queryFn: () => api<{ meal: Meal }>(`/api/meals/${id}`),
  });
}

export function useStreak() {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.streak(userId),
    queryFn: () => api<StreakResponse>('/api/streak'),
  });
}

export function useSaveOnboarding() {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: SaveOnboardingBody) => api<MeResponse>('/api/onboarding', { method: 'POST', body }),
    onSuccess: (data) => queryClient.setQueryData(queryKeys.me(userId), data),
  });
}

export function useUpdateProfile() {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: UpdateProfileBody) => api<MeResponse>('/api/me', { method: 'PATCH', body }),
    onSuccess: (data, body) => {
      queryClient.setQueryData(queryKeys.me(userId), data);
      // A new weight is also today's weigh-in.
      if (body.weightKg !== undefined) void queryClient.invalidateQueries({ queryKey: queryKeys.weights(userId) });
    },
  });
}

export function useDeleteAccount() {
  const api = useApi();
  return useMutation({
    mutationFn: () => api<{ deleted: boolean }>('/api/me', { method: 'DELETE' }),
  });
}

/** Refresh everything that depends on the meal list (home list, streak, favourites). */
export function useInvalidateMeals() {
  const { userId } = useSession();
  const queryClient = useQueryClient();
  return () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: queryKeys.mealsAll(userId) }),
      queryClient.invalidateQueries({ queryKey: queryKeys.streak(userId) }),
      queryClient.invalidateQueries({ queryKey: queryKeys.favorites(userId) }),
      queryClient.invalidateQueries({ queryKey: queryKeys.insights(userId) }),
      queryClient.invalidateQueries({ queryKey: queryKeys.nutrientsAll(userId) }),
    ]);
}

export function useUpdateMeal(id: string) {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  const invalidateMeals = useInvalidateMeals();
  return useMutation({
    mutationFn: (body: UpdateMealBody) => api<{ meal: Meal }>(`/api/meals/${id}`, { method: 'PATCH', body }),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.meal(userId, id), data);
      return invalidateMeals();
    },
  });
}

export function useDeleteMeal() {
  const api = useApi();
  const invalidateMeals = useInvalidateMeals();
  return useMutation({
    mutationFn: (id: string) => api<{ deleted: boolean }>(`/api/meals/${id}`, { method: 'DELETE' }),
    onSuccess: () => invalidateMeals(),
  });
}

export function useFavorites() {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.favorites(userId),
    queryFn: () => api<{ meals: Meal[] }>('/api/favorites'),
  });
}

/** "Log again": copies a meal to now (or to an earlier `date`). */
export function useDuplicateMeal() {
  const api = useApi();
  const invalidateMeals = useInvalidateMeals();
  return useMutation({
    mutationFn: ({ id, date }: { id: string; date?: string }) =>
      api<{ meal: Meal }>(`/api/meals/${id}/duplicate`, { method: 'POST', body: { date: date && dayParam(date) } }),
    onSuccess: () => invalidateMeals(),
  });
}

/** Quick add: calories and macros typed in (no AI), now or on an earlier `date`. */
export function useQuickAdd() {
  const api = useApi();
  const invalidateMeals = useInvalidateMeals();
  return useMutation({
    mutationFn: ({ date, ...quick }: QuickMeal) =>
      api<{ meal: Meal }>('/api/meals', { method: 'POST', body: { quick: { ...quick, date: date && dayParam(date) } } }),
    onSuccess: () => invalidateMeals(),
  });
}

/** "Copy yesterday": every meal of `from` logged again on `to`. */
export function useCopyDay() {
  const api = useApi();
  const invalidateMeals = useInvalidateMeals();
  return useMutation({
    mutationFn: (body: { from: string; to: string }) =>
      api<{ meals: Meal[] }>('/api/days/copy', { method: 'POST', body }),
    onSuccess: () => invalidateMeals(),
  });
}

export function useWater(date: string) {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.water(userId, date),
    queryFn: () => api<WaterDay>(`/api/water?date=${date}`),
  });
}

function withEntries(date: string, entries: WaterEntry[]): WaterDay {
  return { date, entries, totalMl: entries.reduce((sum, e) => sum + e.amountMl, 0) };
}

/** Adds a drink. The total updates at once and rolls back if the request fails. */
export function useAddWater(date: string) {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  const key = queryKeys.water(userId, date);
  return useMutation({
    mutationFn: (amountMl: number) =>
      api<{ entry: WaterEntry }>('/api/water', { method: 'POST', body: { amountMl, date: dayParam(date) } }),
    onMutate: async (amountMl) => {
      await queryClient.cancelQueries({ queryKey: key });
      const previous = queryClient.getQueryData<WaterDay>(key);
      const pending: WaterEntry = { id: `pending-${Date.now()}`, amountMl, loggedAt: new Date().toISOString() };
      queryClient.setQueryData<WaterDay>(key, withEntries(date, [...(previous?.entries ?? []), pending]));
      return { previous };
    },
    onError: (_error, _amount, context) => queryClient.setQueryData(key, context?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: key }),
  });
}

/** Undo one drink (optimistic too). */
export function useDeleteWater(date: string) {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  const key = queryKeys.water(userId, date);
  return useMutation({
    mutationFn: (id: string) => api<{ deleted: boolean }>(`/api/water/${id}`, { method: 'DELETE' }),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: key });
      const previous = queryClient.getQueryData<WaterDay>(key);
      queryClient.setQueryData<WaterDay>(key, withEntries(date, (previous?.entries ?? []).filter((e) => e.id !== id)));
      return { previous };
    },
    onError: (_error, _id, context) => queryClient.setQueryData(key, context?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: key }),
  });
}

/** The last 7 complete days: averages against goals (Home's weekly card). */
export function useWeeklyInsights() {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.insights(userId),
    queryFn: () => api<WeeklyInsights>('/api/insights/weekly'),
    staleTime: 10 * 60_000,
  });
}

/** GLP-1 mode: settings, recent doses and side effects, the next scheduled dose. */
export function useGlp1(enabled = true) {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.glp1(userId),
    queryFn: () => api<Glp1Response>('/api/glp1'),
    enabled,
  });
}

function useInvalidateGlp1() {
  const { userId } = useSession();
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: queryKeys.glp1(userId) });
}

/** Turns GLP-1 mode on or updates it; `null` turns it off (the history is kept). */
export function useSaveGlp1() {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  const invalidateGlp1 = useInvalidateGlp1();
  return useMutation({
    mutationFn: (settings: Glp1Settings | null) => api<MeResponse>('/api/glp1', { method: 'PUT', body: { settings } }),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.me(userId), data);
      return invalidateGlp1();
    },
  });
}

/** Turns GLP-1 mode off and deletes every dose and side-effect entry. */
export function useDeleteGlp1Data() {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  const invalidateGlp1 = useInvalidateGlp1();
  return useMutation({
    mutationFn: () => api<{ deleted: boolean }>('/api/glp1', { method: 'DELETE' }),
    onSuccess: () =>
      Promise.all([queryClient.invalidateQueries({ queryKey: queryKeys.me(userId) }), invalidateGlp1()]),
  });
}

export function useLogDose() {
  const api = useApi();
  const invalidateGlp1 = useInvalidateGlp1();
  return useMutation({
    mutationFn: (body: AddDoseBody) => api('/api/glp1/doses', { method: 'POST', body }),
    onSuccess: () => invalidateGlp1(),
  });
}

export function useDeleteDose() {
  const api = useApi();
  const invalidateGlp1 = useInvalidateGlp1();
  return useMutation({
    mutationFn: (id: string) => api(`/api/glp1/doses/${id}`, { method: 'DELETE' }),
    onSuccess: () => invalidateGlp1(),
  });
}

export function useLogSymptoms() {
  const api = useApi();
  const invalidateGlp1 = useInvalidateGlp1();
  return useMutation({
    mutationFn: (body: AddSymptomsBody) => api('/api/glp1/symptoms', { method: 'POST', body }),
    onSuccess: () => invalidateGlp1(),
  });
}

export function useDeleteSymptom() {
  const api = useApi();
  const invalidateGlp1 = useInvalidateGlp1();
  return useMutation({
    mutationFn: (id: string) => api(`/api/glp1/symptoms/${id}`, { method: 'DELETE' }),
    onSuccess: () => invalidateGlp1(),
  });
}

/** USDA food search as you type (at least 2 letters). */
export function useFoodSearch(query: string) {
  const api = useApi();
  const q = query.trim();
  return useQuery({
    queryKey: ['foods', q],
    queryFn: ({ signal }) => api<{ foods: FoodSummary[] }>(`/api/foods?q=${encodeURIComponent(q)}`, { signal }),
    enabled: q.length >= 2,
    staleTime: 60 * 60_000,
    placeholderData: (previous) => previous,
  });
}

/** A packaged product by its barcode. A 404 (nobody knows it) is not retried. */
export function useProduct(code: string) {
  const api = useApi();
  return useQuery({
    queryKey: ['product', code],
    queryFn: ({ signal }) => api<{ product: Product }>(`/api/products/${code}`, { signal }),
    staleTime: 60 * 60_000,
    retry: (count, error) => !(error instanceof ApiError && error.status < 500) && count < 2,
  });
}

/** Saves a meal's edited foods; the server recalculates every number. */
export function useUpdateMealItems(id: string) {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  const invalidateMeals = useInvalidateMeals();
  return useMutation({
    mutationFn: (body: UpdateMealItemsBody) => api<{ meal: Meal }>(`/api/meals/${id}/items`, { method: 'PUT', body }),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.meal(userId, id), data);
      return invalidateMeals();
    },
  });
}

/** A day's vitamins and minerals against the targets. */
export function useNutrients(date: string) {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.nutrients(userId, date),
    queryFn: () => api<NutrientDay>(`/api/nutrients?date=${date}`),
  });
}

export function useSupplements(date: string) {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.supplements(userId, date),
    queryFn: () => api<SupplementsDay>(`/api/supplements?date=${date}`),
  });
}

function useInvalidateSupplements() {
  const { userId } = useSession();
  const queryClient = useQueryClient();
  return () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: queryKeys.supplementsAll(userId) }),
      queryClient.invalidateQueries({ queryKey: queryKeys.nutrientsAll(userId) }),
    ]);
}

export function useSaveSupplement() {
  const api = useApi();
  const invalidate = useInvalidateSupplements();
  return useMutation({
    mutationFn: ({ id, body }: { id?: string; body: SupplementBody }) =>
      id ? api(`/api/supplements/${id}`, { method: 'PATCH', body }) : api('/api/supplements', { method: 'POST', body }),
    onSuccess: () => invalidate(),
  });
}

export function useDeleteSupplement() {
  const api = useApi();
  const invalidate = useInvalidateSupplements();
  return useMutation({
    mutationFn: (id: string) => api(`/api/supplements/${id}`, { method: 'DELETE' }),
    onSuccess: () => invalidate(),
  });
}

/** Ticks or un-ticks a supplement for a day, updating the list right away. */
export function useToggleSupplement(date: string) {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  const invalidate = useInvalidateSupplements();
  const key = queryKeys.supplements(userId, date);
  return useMutation({
    mutationFn: ({ id, taken }: { id: string; taken: boolean }) =>
      taken
        ? api(`/api/supplements/${id}/taken`, { method: 'POST', body: { date } })
        : api(`/api/supplements/${id}/taken?date=${date}`, { method: 'DELETE' }),
    onMutate: async ({ id, taken }) => {
      await queryClient.cancelQueries({ queryKey: key });
      const previous = queryClient.getQueryData<SupplementsDay>(key);
      if (previous) {
        queryClient.setQueryData<SupplementsDay>(key, {
          ...previous,
          supplements: previous.supplements.map((s) => (s.id === id ? { ...s, taken } : s)),
        });
      }
      return { previous };
    },
    onError: (_error, _vars, context) => {
      if (context?.previous) queryClient.setQueryData(key, context.previous);
    },
    onSettled: () => invalidate(),
  });
}

export function useWeights() {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({ queryKey: queryKeys.weights(userId), queryFn: () => api<WeightHistory>('/api/weights') });
}

/** Weigh-ins change the profile's weight too (it is always the latest one). */
function useInvalidateWeights() {
  const { userId } = useSession();
  const queryClient = useQueryClient();
  return () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: queryKeys.weights(userId) }),
      queryClient.invalidateQueries({ queryKey: queryKeys.me(userId) }),
    ]);
}

export function useLogWeight() {
  const api = useApi();
  const invalidate = useInvalidateWeights();
  return useMutation({
    mutationFn: (body: AddWeightBody) => api<{ entry: WeightEntry }>('/api/weights', { method: 'POST', body }),
    onSuccess: () => void invalidate(),
  });
}

export function useDeleteWeight() {
  const api = useApi();
  const invalidate = useInvalidateWeights();
  return useMutation({
    mutationFn: (id: string) => api(`/api/weights/${id}`, { method: 'DELETE' }),
    onSuccess: () => void invalidate(),
  });
}

/** Optional features the server has set up (email codes, …). Works signed out too. */
export function useFeatures() {
  const api = useApi();
  return useQuery({ queryKey: ['features'], queryFn: () => api<Features>('/api/features'), staleTime: 10 * 60_000 });
}

/** Free or Premium, and today's free AI scans (payments on). */
export function useBilling(enabled = true) {
  const { userId } = useSession();
  const api = useApi();
  return useQuery({ queryKey: queryKeys.billing(userId), queryFn: () => api<BillingStatus>('/api/billing'), enabled });
}

/** After a purchase or restore: the server reads the new entitlement right away. */
export function useSyncBilling() {
  const { userId } = useSession();
  const api = useApi();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => api<BillingStatus>('/api/billing/sync', { method: 'POST' }),
    onSuccess: (data) => queryClient.setQueryData(queryKeys.billing(userId), data),
  });
}
