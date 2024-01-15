<script setup lang="ts">
import { useCounterStore } from "../store/counter.ts";
import Options from "./Options.vue";
import Composition from "./Composition.vue";
import { computed } from "vue";
import { useForm } from "vee-validate";
const store = useCounterStore();
const isEven = computed(() => store.isEven);
const count = computed(() => store.count);

function required(value?: string) {
    return value ? true : "This field is required";
}
const { defineField, handleSubmit, errors } = useForm({
    validationSchema: {
        field: required,
    },
});
const [field, fieldProps] = defineField("field");
</script>

<template>
    <div class="card">
        <VanButton type="primary" @click="store.increment"> count is {{ count }} </VanButton>
        <input v-model="field" v-bind="fieldProps" />
        <span class="error">{{ errors.field }}</span>
        <VanButton type="danger" @click="handleSubmit"> submit </VanButton>
        <keep-alive>
            <options v-if="isEven" />
            <composition v-else />
        </keep-alive>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: indigo;
}
</style>
