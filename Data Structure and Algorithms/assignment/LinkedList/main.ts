import LinkedList from "./modules/linkedlist";

interface User {
    id: number;
    name: string;
}

const list = new LinkedList<User>();

for (let i = 0; i < 10; i++) {
    list.push({
        id: i,
        name: `User-${i}`
    })
}

console.log(list.search({name: "User-1"}));