import LinkedList from "./modules/linkedlist";

const list = new LinkedList<number>()

list.push(80);
list.push(74);
list.push(4);

const [isSearched] = list.search(79);
console.log(isSearched);