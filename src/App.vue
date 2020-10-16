<template>
  <p v-if="loadingState === 'loading'">Loading...</p>
  <section v-if="loadingState === 'loaded'">
    <repository-card
      v-for="repository in repositories"
      :key="repository.id"
      :repository="repository"
    ></repository-card>
  </section>

  <p v-if="loadingState === 'error'">Something went wrong</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserRepositories, RepositoryCard } from './use-cases/repository';
import { useUser } from './use-cases/user';

export default defineComponent({
  name: 'App',
  components: {
    RepositoryCard,
  },
  setup() {
    const { user } = useUser();
    const { repositories, loadingState } = useUserRepositories(user);

    setTimeout(() => {
      user.value = { username: 'mlande' };
    }, 3000);
    return { repositories, loadingState };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
