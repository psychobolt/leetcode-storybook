import json from '../testCases.json';

export const cases = json;

export default (MyCircularQueue, { input, args }) => {
  const queue = new MyCircularQueue(...args[0]);
  return input.map((command, i) => {
    const func = MyCircularQueue.prototype[command];
    if (func) return func.apply(queue, args[i]);
    return null;
  });
};
