<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  msg: string;
}>();

const count = ref(0);
</script>

<template>
  <div>
    <h1 class="text-3xl border-b border-neutral-200 pb-2 mb-2">{{ msg }}</h1>
    <h3 class="border-b border-neutral-200 pb-2 mb-2">Checkout this counter:</h3>
    <div>
      <el-button type="primary" @click="count++">Count: {{ count }}</el-button>
    </div>
  </div>
</template>

<style scoped></style>
