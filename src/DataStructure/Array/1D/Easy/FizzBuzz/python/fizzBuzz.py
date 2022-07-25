from typing import List

#
# @lc app=leetcode id=412 lang=python3
#
# [412] Fizz Buzz
#

# @lc code=start


class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        result = []
        for i in range(1, n + 1):
            value = ''
            if (i % 3 == 0):
                value += 'Fizz'
            if (i % 5 == 0):
                value += 'Buzz'
            if not value:
                value = str(i)
            result.append(value)
        return result
# @lc code=end
