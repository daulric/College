import LinkedList from "../modules/linkedlist";

const list = new LinkedList<number>();

for (let i = 1; i <= 10; i++) {
    list.push(i);
}

list.print();
list.shift();
list.print();

list.unshift(100);
list.print();