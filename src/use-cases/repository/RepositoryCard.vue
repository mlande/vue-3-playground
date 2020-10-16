<template>
  <article>
    <h2>
      {{ repository.name }}
    </h2>
  </article>
</template>

<script>
import { defineComponent } from 'vue';
import { Repository } from './repository.service';

export default defineComponent({
  props: {
    repository: { type: Repository, required: true },
  },
});
</script>

<style lang="sass" scoped></style>
>
