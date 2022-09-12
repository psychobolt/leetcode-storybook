/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  const set = new Set();
  return arr.find(n => {
    const result = (n % 2 === 0 && set.has(n / 2)) || set.has(2 * n);
    set.add(n);
    return result;
  }) !== undefined;
};
// @lc code=end

export default checkIfExist;
