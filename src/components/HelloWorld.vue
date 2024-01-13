<script setup lang="ts">
import { ref } from "vue";
import Options from "./options.vue";
import Composition from "./composition.vue";
defineProps<{ msg: string }>();
const count = ref(0);
function isEven(n: number) {
  return n % 2 == 0;
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <keep-alive>
      <options v-if="isEven(count)" />
      <composition v-else />
    </keep-alive>
  </div>
</template>

<style scoped>
div {
  background: indigo;
}
</style>
