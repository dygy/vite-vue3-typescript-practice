// stores/counter.spec.ts
import { setActivePinia, createPinia } from "pinia";
import { describe, expect, beforeEach, it } from "vitest";
import { useCounterStore } from "../src/store/counter";

describe("Counter Store", () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        // so it's automatically picked up by any useStore() call
        // without having to pass it to it: `useStore(pinia)`
        setActivePinia(createPinia());
    });

    it("increments", () => {
        const counter = useCounterStore();
        expect(counter.count).toBe(0);
        counter.increment();
        expect(counter.count).toBe(1);
    });
});
