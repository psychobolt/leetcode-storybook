import json from '../testCases.json';

export const cases = json;

export default (HashMap, { input, args }) => {
  const map = new HashMap();
  return input.map((command, i) => {
    const func = HashMap.prototype[command];
    if (func) return func.apply(map, args[i]);
    return null;
  });
};
