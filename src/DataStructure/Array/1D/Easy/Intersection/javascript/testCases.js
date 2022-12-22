import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { nums1, nums2 } }) => runSolution(nums1, nums2);
