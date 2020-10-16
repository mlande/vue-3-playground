import { Ref, ref } from 'vue';

export interface User {
  username: string;
}

interface UserUseCase {
  user: Ref<User>;
}

export function useUser(): UserUseCase {
  const user: Ref<User> = ref({
    username: 'lane',
  });

  return {
    user,
  };
}
