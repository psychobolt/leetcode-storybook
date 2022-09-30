import json from '../testCases.json';

export const cases = json;

export default (MinStack, { input, args }) => {
  const stack = new MinStack();
  return input.map((command, i) => {
    const func = MinStack.prototype[command];
    if (func) return func.apply(stack, args[i]);
    return null;
  });
};
