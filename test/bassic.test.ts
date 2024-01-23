import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Hello from "../src/components/HelloWorld.vue";
import { createTestingPinia } from "@pinia/testing";

describe("mount component", async () => {
    test("test component", async () => {
        expect(Hello).toBeTruthy();

        const wrapper = mount(Hello, {
            global: {
                plugins: [
                    createTestingPinia({
                        stubActions: false,
                        initialState: {
                            counter: {
                                count: 0,
                            },
                        },
                    }),
                ],
            },
        });

        expect(wrapper.text()).toContain("count is 0 submit this is options api");

        const button = wrapper.find("#increment");
        await button.trigger("click");
        expect(wrapper.text()).toContain("count is 1 submit this is composition api");

        await button.trigger("click");

        expect(wrapper.text()).toContain("count is 2 submit this is options api");
    });
});
