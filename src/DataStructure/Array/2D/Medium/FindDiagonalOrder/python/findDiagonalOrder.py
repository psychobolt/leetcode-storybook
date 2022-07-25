from typing import List

#
# @lc app=leetcode id=498 lang=python3
#
# [498] Diagonal Traverse
#

# @lc code=start


class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        M = len(mat)
        N = len(mat[0])
        i = 0
        result = []
        for d in range(M + N - 1):
            i = 0 if d < N else i + 1
            j = d if d < N else N - 1
            diagonal = []
            diagonal.append(mat[i][j])
            for row in range(i + 1, M):
                j -= 1
                if (j < 0):
                    break
                diagonal.append(mat[row][j])
            if (d % 2 == 0):
                result.extend(reversed(diagonal))
            else:
                result.extend(diagonal)
        return result
# @lc code=end
