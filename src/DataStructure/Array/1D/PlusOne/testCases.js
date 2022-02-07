export const cases = [
  {
    digits: [1,2,3],
    expected: [1,2,4]
  },
  {
    digits: [4,3,2,1],
    expected: [4,3,2,2]
  },
  {
    digits: [9],
    expected: [1,0]
  },
];

const runTestCase = (plusOne, { digits }) => {
  return plusOne(digits);
};

export default runTestCase;