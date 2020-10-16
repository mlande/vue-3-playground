import { onMounted, Ref, ref, watch } from 'vue';
import { getByUsername, Repository } from './repository.service';
import { User } from '@/use-cases/user';
export interface UserRepositoryUseCase {
  repositories: Ref<Repository[]>;
  loadingState: Ref<'loading' | 'loaded' | 'error'>;
}

type LoadingState = 'loading' | 'loaded' | 'error';

export function useUserRepositories(user: Ref<User>): UserRepositoryUseCase {
  const repositories = ref([] as Repository[]);
  const loadingState = ref('loaded' as LoadingState);

  const getUserRepositories = async () => {
    loadingState.value = 'loading';
    try {
      repositories.value = await getByUsername(user.value.username);
      loadingState.value = 'loaded';
    } catch (error) {
      loadingState.value = 'error';
    }
  };

  onMounted(getUserRepositories);

  watch(user, getUserRepositories);

  return {
    repositories,
    loadingState,
  };
}
