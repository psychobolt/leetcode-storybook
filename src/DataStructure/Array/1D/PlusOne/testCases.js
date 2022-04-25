export const cases = [
  {
    input: [1, 2, 3],
    expected: [1, 2, 4],
  },
  {
    input: [4, 3, 2, 1],
    expected: [4, 3, 2, 2],
  },
  {
    input: [9],
    expected: [1, 0],
  },
];

const runTestCase = (plusOne, { input }) => plusOne(input);

export default runTestCase;
