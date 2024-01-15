import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Hello from "../src/components/HelloWorld.vue";
import { createTestingPinia } from "@pinia/testing";
import { useCounterStore } from "../src/store/counter";

describe("mount component", async () => {
    // TODO:// find out how to make store work
    test("test component", async () => {
        expect(Hello).toBeTruthy();

        const wrapper = mount(Hello, {
            global: {
                plugins: [createTestingPinia()],
            },
        });
        const store = useCounterStore(); // uses the testing pinia!

        expect(wrapper.text()).toContain("count is 0this is options api");

        const button = wrapper.find("button");
        store.increment();
        await button.trigger("click");
        expect(wrapper.text()).toContain("count is 1this is composition api");

        await button.trigger("click");

        expect(wrapper.text()).toContain("count is 2this is options api");
    });
});
