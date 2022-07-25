import _ from 'lodash';

import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input }) => runSolution(_.cloneDeep(input));
