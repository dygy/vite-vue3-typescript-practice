import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import "./style.css";
import HelloWorld from "./components/HelloWorld.vue";
import App from "./App.vue";
import { Button } from "vant";
import VueLazyload from "vue-lazyload";

const app = createApp(App);

const routes = [
    { path: "/", component: HelloWorld },
    { path: "/about", component: { template: "<div>about</div>" } },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Button);
app.use(VueLazyload);
app.mount("#app");
