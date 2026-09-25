import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { Meal, UpdateMealBody } from '@/shared/meals';
import type { SaveOnboardingBody } from '@/shared/onboarding';
import type { MeResponse, StreakResponse, UpdateProfileBody } from '@/shared/user';
import type { WaterDay, WaterEntry } from '@/shared/water';

import { useApi } from './api';
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
    onSuccess: (data) => queryClient.setQueryData(queryKeys.me(userId), data),
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
