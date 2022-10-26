import json from '../testCases.json';

export const cases = json;

export default (MyQueue, { input, args }) => {
  const queue = new MyQueue();
  return input.map((command, i) => {
    if (MyQueue.prototype[command]) {
      return MyQueue.prototype[command].apply(queue, args[i]);
    }
    return null;
  });
};
