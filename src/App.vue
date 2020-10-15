<template>
  <h1>Hello Composition</h1>
  <p v-for="repo in repos" :key="repo.id">
    {{ repo.name }}
  </p>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, SetupContext } from 'vue';
import { getReposOfUser, GithubRepo } from './service';

export default defineComponent({
  name: 'App',
  components: {},
  setup(props, ctx: SetupContext) {
    console.log('Setting up');
    console.log('these are my props:', props);
    console.log('this is my context:', ctx);

    const repos: Ref<GithubRepo[]> = ref([]);

    const getRepos = async (githubUsername: string) => {
      repos.value = await getReposOfUser(githubUsername);
    };

    setTimeout(() => {
      getRepos('mlande');
    }, 4000);

    return {
      repos,
    };
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
