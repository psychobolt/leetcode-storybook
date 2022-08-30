/* eslint-disable no-param-reassign */

/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const set = new Set();
  let result = n;
  while (!set.has(result)) {
    set.add(result);
    n = result;
    result = 0;
    for (result = 0; n > 9; n = Math.floor(n / 10)) {
      const digit = n % 10;
      result += digit * digit;
    }
    result += n * n;
    if (result === 1) return true;
  }
  return false;
};
// @lc code=end

export default isHappy;
