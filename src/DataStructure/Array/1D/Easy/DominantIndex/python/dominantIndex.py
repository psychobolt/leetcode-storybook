from typing import List

#
# @lc app=leetcode id=747 lang=python3
#
# [747] Largest Number At Least Twice of Others
#

# @lc code=start


class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        largestNum = -1
        for i, num in enumerate(nums):
            if (largestNum < num):
                largestNum = num
                largestIndex = i
        for i, num in enumerate(nums):
            if (i != largestIndex and 2 * nums[i] > largestNum):
                return -1
        return largestIndex

# @lc code=end
