function Node(data) {
    return {
        data: data,
        next: null,
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert_beginning(data) {
        const new_node = Node(data);
        new_node.next = this.head;
        this.head = new_node;
    }

    insert_end(data) {
        const new_node = Node(data);

        if (!this.head) {
            this.head = new_node;
        } else {
            let temp = this.head;

            while (temp.next) {
                temp = temp.next;
            }

            temp.next = new_node;
        }
    }

    insert_after_position(data, position) {
        if (position < 0) return;

        if (position === 0) {
            this.insert_beginning(data);
            return;
        }

        const new_node = Node(data);
        let temp = this.head;
        let count = 1;

        while (temp && count < position) {
            temp = temp.next;
            count++;
        }

        if (!temp) return;

        new_node.next = temp.next
        temp.next = new_node;
    }

    insert_before_position(data, position) {
        if (position < 0) return;

        if (position === 0) {
            this.insert_beginning(data);
            return;
        }

        const new_node = Node(data);
        let temp = this.head;
        let count = 1;

        while (temp && count < position - 1) {
            temp = temp.next;
            count++;
        }

        if (!temp) return;
        new_node.next = temp.next;
        temp.next = new_node;
    }


    print() {
        let temp = this.head;
        let str = "";

        while (temp) {
            str += temp.data + " ";
            temp = temp.next;
        }

       console.log(`[${str.trim()}]`);
    }
}

const list = new LinkedList();

console.log("starting")
list.insert_beginning(2)
list.insert_end(1)
list.insert_end(3)
list.insert_end(4)
list.insert_after_position(5, 1)
list.insert_before_position(6, 3)
list.insert_before_position(7, 4)

list.print()