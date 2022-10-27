import json from '../testCases.json';

export const cases = json;

export default (MyStack, { input, args }) => {
  const stack = new MyStack();
  return input.map((command, i) => {
    const func = MyStack.prototype[command];
    if (func) {
      return func.apply(stack, args[i]);
    }
    return null;
  });
};
