export const cases = [
  {
    commands: ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"],
    args: [[],[1],[3],[1,2],[1],[1],[1]],
    expected: [null,null,null,null,2,null,3]
  },
  {
    commands: ["MyLinkedList","addAtHead","deleteAtIndex"],
    args: [[],[1],[0]],
    expected: [null,null,null]
  },
  {
    commands: ["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"],
    args: [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]],
    expected: [null, null, null, null, null, null, null, null, 4, null, null, null]
  },
  {
    commands: ["MyLinkedList","addAtIndex","addAtIndex","addAtIndex","get"],
    args: [[],[0,10],[0,20],[1,30],[0]],
    expected: [null,null,null,null,20],
  },
  {
    commands: ["MyLinkedList","addAtIndex","get"],
    args: [[],[1,0],[0]],
    expected: [null, null, -1],
  }
];

const runTestCase = (LinkedList, { commands, args }) => {
  const list = new LinkedList();
  return commands.map((command, i) => {
    const func = LinkedList.prototype[command];
    if (func) return func.apply(list, args[i]);
    return null;
  });
};

export default runTestCase;