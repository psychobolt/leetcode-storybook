export const cases = [
  {
    nums: [1, 7, 3, 6, 5, 6],
    expected: 3,
  },
  {
    nums: [1, 2, 3],
    expected: -1,
  },
  {
    nums: [2, 1, -1],
    expected: 0,
  },
];

const runTestCase = (findPivot, { nums }) => findPivot(nums);

export default runTestCase;
