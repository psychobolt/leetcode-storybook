import { deserialize } from 'btree-serialize';

import json from '../testCases.json';

export const cases = json;

function getResult(prev, cur, result = []) {
  let next;
  if (prev === null && cur === null) return;
  if (prev !== null && cur == null) {
    if (prev.next) getResult(null, prev.next.left, result);
    return;
  }
  for (next = cur; next; next = next.next) result.push(next.val);
  if (next === null) result.push('#');
  else result.push('undefined next');
  getResult(cur, cur.left || cur.right, result);
}

export default (runSolution, { input }) => {
  const root = runSolution(deserialize(JSON.stringify(input)));
  const result = [];
  getResult(null, root, result);
  return result;
};
