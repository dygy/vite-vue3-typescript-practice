<script setup lang="ts">
import Options from "./options.vue";
import Composition from "./composition.vue";
import { useCounterStore } from "../store/counter.ts";
import { computed } from "vue";
defineProps<{ msg: string }>();
const store = useCounterStore();
const isEven = computed(() => store.isEven);
const count = computed(() => store.count);
</script>

<template>
    <h1>{{ msg }}</h1>

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
