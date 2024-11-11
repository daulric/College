const CreateNode = (value) => {
    return {
        value: value,
        next: null,
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    print() {
        let current = this.head;
        let str = "";

        while (current !== null) {
            str += current.value;
            current = current.next;

            if (current !== null) {
                str += "->";
            }
        }

        console.log(str, "\n");
    }

    add(value) {
        if (this.head === null) {
            this.head = CreateNode(value);
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = CreateNode(value);
        }
    }

    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next
            return;
        }
    }

    sort(func) {
        if  (!this.head || !this.head.next) return;

        let swapped;
        do {
            swapped = false;
            let current = this.head;

            while (current.next) {
                if (func(current.value, current.next.value)) {
                    [current.value, current.next.value] = [current.next.value, current.value];
                    swapped = true;
                }

                current = current.next;
            }

        } while (swapped);
    }

    insert_start(value) {
        let node = CreateNode(value);
        node.next = this.head;
        self.head = node;
    }

}

const list = new LinkedList();
list.add(89);
list.add(8);
list.add(837);
list.add(2)
list.print();

list.sort((a, b) => a > b);
list.print();