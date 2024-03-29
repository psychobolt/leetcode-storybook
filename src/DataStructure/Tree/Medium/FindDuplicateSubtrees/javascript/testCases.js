import serialize, { deserialize } from 'btree-serialize';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input }) => runSolution(deserialize(JSON.stringify(input)))
  .map(root => JSON.parse(serialize(root)));
