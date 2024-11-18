const LinkedList = require("./linkedlist");

const list = new LinkedList();
list.add(89);
list.add(8);
list.add(837);
list.add(2)
//list.print();

list.insert_start(4);
list.print();
list.sort((a, b) => a >= b);
list.print();
list.remove(8);
list.print();

const searched_node = list.search(2);
console.log(searched_node);