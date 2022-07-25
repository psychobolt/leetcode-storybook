from typing import List

#
# @lc app=leetcode id=66 lang=python3
#
# [66] Plus One
#

# @lc code=start


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        for i in range(len(digits)):
            index = -i - 1
            if digits[index] == 9:
                digits[index] = 0
            else:
                digits[index] += 1
                return digits
        digits.insert(0, 1)
        return digits

# @lc code=end
