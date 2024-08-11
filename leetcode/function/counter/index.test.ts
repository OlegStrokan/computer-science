// createCounter.test.ts

import { expect, test } from "bun:test";
import { createCounter } from ".";

test("should initialize counter with given starting number", () => {
  const counter = createCounter(5);
  expect(counter()).toBe(5);
});

test("should increment the counter value on each call", () => {
  const counter = createCounter(10);
  expect(counter()).toBe(10);
  expect(counter()).toBe(11);
  expect(counter()).toBe(12);
});

test("should work with different initial values", () => {
  const counter1 = createCounter(0);
  const counter2 = createCounter(100);

  expect(counter1()).toBe(0);
  expect(counter1()).toBe(1);
  expect(counter2()).toBe(100);
  expect(counter2()).toBe(101);
});
