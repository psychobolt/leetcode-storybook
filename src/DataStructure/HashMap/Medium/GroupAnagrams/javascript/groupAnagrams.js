/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach(str => {
    const chars = [];
    for (let i = 0; i < str.length; i += 1) {
      chars.push(str.charAt(i));
    }

    const key = chars.sort().join('');
    let values = map.get(key);

    if (!values) {
      values = [];
      map.set(key, values);
    }

    values.push(str);
  });

  return Array.from(map.values());
};
// @lc code=end

export default groupAnagrams;
