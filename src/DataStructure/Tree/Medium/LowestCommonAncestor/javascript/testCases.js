import { deserialize } from 'btree-serialize';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { root, p, q } }) => runSolution(
  deserialize(JSON.stringify(root)),
  { val: p },
  { val: q },
).val;
