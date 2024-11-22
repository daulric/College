import LinkedList from "../modules/linkedlist";

const head_list = new LinkedList<any>();

for (let i = 0; i < 15; i++) {
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

head_list.pop();
head_list.sort((a, b) => a.size() > b.size());
head_list.map(list => list.print());