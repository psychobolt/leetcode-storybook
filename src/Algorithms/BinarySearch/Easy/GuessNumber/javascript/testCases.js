import json from '../testCases.json';

export const cases = json;

const context = {
  fn: () => 0,
};

export function guess(num) {
  return context.fn(num);
}

guess.mockImplementation = guess.mockImplementation || (fn => {
  context.fn = fn;
});

export default (runSolution, { input, expected }) => {
  guess.mockImplementation(num => {
    if (num > expected) return -1;
    if (num < expected) return 1;
    return 0;
  });
  return runSolution(input);
};
