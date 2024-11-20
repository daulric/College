import LinkedList from "./modules/linkedlist";

const head_list = new LinkedList<any>();

for (let i = 0; i < 10; i++) {
    head_list.push(new LinkedList());
}

head_list.print();
let index = 0;
head_list.map(list => {
    index++;
    
    for (let i = 0; i < index; i++) {
        list.push(`User-${i}`);
    }

    list.print();
});