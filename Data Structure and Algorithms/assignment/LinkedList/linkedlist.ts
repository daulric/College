// omg dawg there is too much going on here for a simple linked list;

interface ListNode<T> {
    value: T;
    next: ListNode<T> | null;
}


function CreateNode<T>(value: T): ListNode<T> {
    return {
        value: value,
        next: null,
    }
}

class LinkedList<T> {
    head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    add(value: T) {
        const node = CreateNode(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;

        while (current && current.next) {
            current = current.next;
        }

        current.next = node;
    }

    remove(value: T) : void {

        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current: ListNode<T> | null = this.head;

        while (current && current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }

            current = current.next;
        }

    }

    sort(func: (a: T, b: T) => boolean) {
        if (!this.head) return;

        let swapped;

        do {
            swapped = false;
            let current = this.head;

            while (current !== null && current.next !== null) {
                let checked_value = func(current.value, current.next.value);

                if (checked_value) {
                    [current.value, current.next.value] = [current.next.value, current.value];
                    swapped = true;
                }

                current = current.next;
            }

        } while (swapped);

    }

    search(value: T): ListNode<T> | null {
        if (!this.head) return null;

        if (this.head.value === value) {
            return this.head;
        }

        let current: ListNode<T> | null = this.head;

        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    insert_start(value: T) {
        const node = CreateNode(value);
        
        if (!this.head) {
            this.head = node
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    print() {
        let current = this.head;
        let str = "";

        while (current) {
            str += current.value;
            current = current.next;

            if (current) {
                str += "->";
            };
        }

        console.log(str, "\n");
    }
}

const list = new LinkedList<number>();
list.add(10)
list.add(78);
list.add(80);
list.add(78);
list.print();

list.sort((a, b) => a > b);
list.print();

const node = list.search(80);
console.log(node);

list.insert_start(8);
list.print();