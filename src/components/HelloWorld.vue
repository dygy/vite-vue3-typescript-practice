<script setup lang="ts">
import Options from "./Options.vue";
import Composition from "./Composition.vue";
import { useCounterStore } from "../store/counter.ts";
import { computed } from "vue";
const store = useCounterStore();
const isEven = computed(() => store.isEven);
const count = computed(() => store.count);
</script>

<template>
    <div class="card">
        <button type="button" @click="store.increment">count is {{ count }}</button>
        <keep-alive>
            <options v-if="isEven" />
            <composition v-else />
        </keep-alive>
    </div>
</template>

<style scoped>
div {
    background: indigo;
}
</style>
