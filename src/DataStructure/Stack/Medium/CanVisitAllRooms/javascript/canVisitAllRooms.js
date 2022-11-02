/*
 * @lc app=leetcode id=841 lang=javascript
 *
 * [841] Keys and Rooms
 */

// @lc code=start

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const stack = rooms[0].map(room => room);
  const push = r => stack.push(r);
  visited.add(0);
  while (stack.length) {
    const room = stack.pop();
    if (!visited.has(room)) {
      rooms[room].forEach(push);
      visited.add(room);
    }
  }
  return visited.size === rooms.length;
};
// @lc code=end

export default canVisitAllRooms;
