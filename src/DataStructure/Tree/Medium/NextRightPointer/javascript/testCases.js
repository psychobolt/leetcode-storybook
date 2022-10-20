import { deserialize } from 'btree-serialize';

import json from '../testCases.json';

export const cases = json;

function getResult(root, left, result = []) {
  if (root === null) return;
  for (let cur = root; cur !== null; cur = cur.next) result.push(cur.val);
  result.push('#');
  if (left === null) getResult(root.right, result);
  else getResult(root.left, result);
}

export default (runSolution, { input }) => {
  const root = runSolution(deserialize(JSON.stringify(input)));
  const result = [];
  getResult(root, root.left, result);
  return result;
};
