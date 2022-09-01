/* eslint-disable no-param-reassign, no-restricted-syntax */

/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function (list1, list2) {
  const map1 = new Map();
  const map2 = new Map();
  const result = [];
  let temp;
  let least = 1000;
  let index1;
  let index2;
  if (list1.length < list2.length) {
    temp = list1;
    list1 = list2;
    list2 = temp;
  }
  list1.forEach((name, i) => map1.set(name, i));
  list2.forEach((name, i) => map1.has(name) && map2.set(name, i));
  list1.forEach(name => !map2.has(name) && map1.delete(name));
  for (const name of map1.keys()) {
    index1 = map1.get(name);
    index2 = map2.get(name);
    if (index1 + index2 <= least) {
      least = index1 + index2;
      map2.set(name, least);
    } else {
      map2.set(name, 1000);
    }
  }
  for (const [name, index] of map2) {
    if (least === index) {
      result.push(name);
    }
  }
  return result;
};
// @lc code=end

export default findRestaurant;
