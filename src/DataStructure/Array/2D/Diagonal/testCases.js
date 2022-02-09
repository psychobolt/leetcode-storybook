export const cases = [
    {
      mat: [[1,2,3],[4,5,6],[7,8,9]],
      expected: [1,2,4,7,5,3,6,8,9]
    },
    {
      mat: [[1,2],[3,4]],
      expected: [1,2,3,4]
    },
    {
      mat: [[2,5],[8,4],[0,-1]],
      expected: [2,5,8,0,4,-1]
    },
    {
      mat: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
      expected: [1,2,3,4,5,6,7,8,9,10]
    },
    {
      mat: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
      expected: [1,2,3,4,5,6,7,8,9,10]
    },
    {
      mat: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],
      expected: [1,2,5,9,6,3,4,7,10,13,14,11,8,12,15,16]
    },
  ];
  
  const runTestCase = (findDiagonalOrder, { mat }) => {
    return findDiagonalOrder(mat);
  };
  
  export default runTestCase;