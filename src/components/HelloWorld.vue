<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <h1 class="text-3xl border-b border-neutral-200 pb-2 mb-2">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a
        href="https://vite.dev/"
        class="underline underline-offset-4 text-blue-400 hover:text-blue-600"
        target="_blank"
        rel="noopener"
      >
        Vite
      </a>
      +
      <a
        href="https://vuejs.org/"
        class="underline underline-offset-4 text-blue-400 hover:text-blue-600"
        target="_blank"
        rel="noopener"
      >
        Vue 3
      </a>
      . What's next?
    </h3>
  </div>
</template>

<style scoped></style>
