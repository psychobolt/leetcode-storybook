import json from '../testCases.json';

export const cases = json;

export default (
  runSolution,
  {
    input: {
      image, sr, sc, color,
    },
  },
) => runSolution(image, sr, sc, color);
