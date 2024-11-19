import LinkedList from "./modules/linkedlist";
import BinaryTree from "./modules/binarytree";

const list = new LinkedList<number>()

list.push(80);
list.push(74);
list.push(4);

const tree = new BinaryTree();
tree.insert(9);
tree.insert(4);
tree.insert(2);
tree.insert(10);

tree.print();