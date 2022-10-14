import { deserialize } from 'btree-serialize';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { root, targetSum } }) => runSolution(
  deserialize(JSON.stringify(root)),
  targetSum,
);
