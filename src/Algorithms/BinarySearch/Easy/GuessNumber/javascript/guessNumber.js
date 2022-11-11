/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
import { guess } from './testCases.js';

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return       -1 if num is higher than the picked number
 *                1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let left = 0;
  let right = n;
  let mid;
  while (left <= right) {
    mid = left + Math.trunc((right - left) / 2);
    const result = guess(mid);
    if (result === 0) return mid;
    if (result < 0) right = mid - 1;
    else if (result > 0) left = mid + 1;
  }
  return -1;
};
// @lc code=end

export default guessNumber;
