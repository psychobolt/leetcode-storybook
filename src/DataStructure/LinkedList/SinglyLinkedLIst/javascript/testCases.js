import json from '../testCases.json';

export const cases = json;

const runTestCase = (LinkedList, { commands, args }) => {
  const list = new LinkedList();
  return commands.map((command, i) => {
    const func = LinkedList.prototype[command];
    if (func) return func.apply(list, args[i]);
    return null;
  });
};

export default runTestCase;
