import json from '../../testCases.json';

export const cases = json;

export default (LinkedList, { input, args }) => {
  const list = new LinkedList();
  return input.map((command, i) => {
    const func = LinkedList.prototype[command];
    if (func) return func.apply(list, args[i]);
    return null;
  });
};
