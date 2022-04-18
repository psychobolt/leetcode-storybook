export const cases = [
  {
    nums: [3, 6, 1, 0],
    expected: 1,
  },
  {
    nums: [1, 2, 3, 4],
    expected: -1,
  },
  {
    nums: [1],
    expected: 0,
  },
];

const runTestCase = (dominantIndex, { nums }) => dominantIndex(nums);

export default runTestCase;
