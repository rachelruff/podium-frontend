// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../../App';
// import { BrowserRouter as Router } from 'react-router-dom';

// import { sum, mul, sub, div } from "./math";

// it("Adding 1 + 1 equals 2", () => {
//     expect(sum(1, 1)).toBe(2)
// });


const { sum, mul, sub, div } = require("./math")

test("Adding 1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2)
})
test("Multiplying 1 * 1 equals 1", () => {
  expect(mul(1, 1)).toBe(1)
})
test("Subtracting 1 - 1 equals 0", () => {
  expect(sub(1, 1)).toBe(0)
})
test("Dividing 1 / 1 equals 1", () => {
  expect(div(1, 1)).toBe(1)
})