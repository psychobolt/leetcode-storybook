import json from '../testCases.json';

export const cases = json;

export default (RandomizedSet, { input, args }) => {
  const set = new RandomizedSet();
  return input.map((command, i) => {
    const func = RandomizedSet.prototype[command];
    if (command === 'getRandom') {
      if (set.data.length === 1) return func.apply(set, args[i]);
      func.apply(set, args[i]);
      return 'any';
    }
    if (func) return func.apply(set, args[i]);
    return null;
  });
};
