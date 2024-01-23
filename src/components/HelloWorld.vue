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
        <VanButton id="increment" type="primary" @click="store.increment"> count is {{ count }} </VanButton>
        <input v-model="field" v-bind="fieldProps" />
        <span class="error">{{ errors.field }}</span>
        <VanButton type="danger" @click="handleSubmit"> submit </VanButton>
        <keep-alive>
            <options v-if="isEven" />
            <composition v-else />
        </keep-alive>
        <div
            v-lazy-container="{
                selector: 'img',
                error: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Icon_Simple_Error.png',
                loading:
                    'https://media0.giphy.com/media/uIJBFZoOaifHf52MER/200w.gif?cid=6c09b952rg4l0n4dituadt53hhlj3iamviq1kc2rt1mdx427&ep=v1_gifs_search&rid=200w.gif&ct=g',
            }"
        >
            <img
                data-src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg"
            />
            <img data-src="https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg" />
            <img data-src="https://cdn.britannica.com/79/149179-050-DC23D823/snowflake-threads-wool-coat.jpg" />
        </div>
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
