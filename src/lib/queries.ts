import { useAuth } from '@clerk/expo';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { Meal, UpdateMealBody } from '@/shared/meals';
import type { SaveOnboardingBody } from '@/shared/onboarding';
import type { MeResponse, StreakResponse, UpdateProfileBody } from '@/shared/user';

import { useApi } from './api';

export const queryKeys = {
  me: (userId: string | null | undefined) => ['me', userId] as const,
  mealsAll: (userId: string | null | undefined) => ['meals', userId] as const,
  meals: (userId: string | null | undefined, date: string) => ['meals', userId, date] as const,
  meal: (userId: string | null | undefined, id: string) => ['meal', userId, id] as const,
  streak: (userId: string | null | undefined) => ['streak', userId] as const,
};

export function useMe() {
  const { isSignedIn, userId } = useAuth();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.me(userId),
    queryFn: () => api<MeResponse>('/api/me'),
    enabled: !!isSignedIn,
    staleTime: 5 * 60_000,
  });
}

/** Profile of the signed-in user. Only use inside the (app) group, where it is guaranteed to exist. */
export function useProfile() {
  const { data } = useMe();
  if (!data?.user) throw new Error('useProfile() used before the profile was loaded');
  return data.user;
}

export function useMeals(date: string) {
  const { userId } = useAuth();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.meals(userId, date),
    queryFn: () => api<{ meals: Meal[] }>(`/api/meals?date=${date}`),
    // Keep refreshing while a meal is still being analyzed in the background.
    refetchInterval: (query) =>
      query.state.data?.meals.some((meal) => meal.status === 'analyzing') ? 3000 : false,
  });
}

export function useMeal(id: string) {
  const { userId } = useAuth();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.meal(userId, id),
    queryFn: () => api<{ meal: Meal }>(`/api/meals/${id}`),
  });
}

export function useStreak() {
  const { userId } = useAuth();
  const api = useApi();
  return useQuery({
    queryKey: queryKeys.streak(userId),
    queryFn: () => api<StreakResponse>('/api/streak'),
  });
}

export function useSaveOnboarding() {
  const { userId } = useAuth();
  const api = useApi();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: SaveOnboardingBody) => api<MeResponse>('/api/onboarding', { method: 'POST', body }),
    onSuccess: (data) => queryClient.setQueryData(queryKeys.me(userId), data),
  });
}

export function useUpdateProfile() {
  const { userId } = useAuth();
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

/** Refresh everything that depends on the meal list (home list, streak). */
export function useInvalidateMeals() {
  const { userId } = useAuth();
  const queryClient = useQueryClient();
  return () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: queryKeys.mealsAll(userId) }),
      queryClient.invalidateQueries({ queryKey: queryKeys.streak(userId) }),
    ]);
}

export function useUpdateMeal(id: string) {
  const { userId } = useAuth();
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
