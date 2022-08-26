import json from '../testCases.json';

export const cases = json;

export default (HashSet, { input, args }) => {
  const set = new HashSet();
  return input.map((command, i) => {
    const func = HashSet.prototype[command];
    if (func) return func.apply(set, args[i]);
    return null;
  });
};
