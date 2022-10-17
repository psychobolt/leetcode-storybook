import json from '../testCases.json';

export const cases = json;

export default (runSolution, { input: { preorder, inorder } }) => runSolution(preorder, inorder);
