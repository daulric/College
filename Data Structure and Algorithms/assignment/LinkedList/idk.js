const { default: LinkedList } = require("./modules/linkedlist")
const list = new LinkedList();

const {default: BinaryTree} = require("./modules/binarytree")

list.push(9);
list.push(10);
list.push(11);

list.print();

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(5);
tree.insert(4);

console.log("Tree Size:", tree.size());
tree.print();
console.log("Tree Array:", tree.toArray());