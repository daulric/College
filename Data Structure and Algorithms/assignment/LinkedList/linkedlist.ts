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
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value: T) {
        const node = CreateNode(value);
        if (!this.head) {
            this.head = node;
            this.size++;
            return;
        }

        let current = this.head;

        while (current && current.next) {
            current = current.next;
        }

        current.next = node;
        this.size++;
    }

    remove(value: T) : void {

        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current: ListNode<T> | null = this.head;

        while (current && current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.size--;
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
        this.size++;
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

    // This is a stack implementation within the linked list
    isEmpty() : boolean {
        return !this.head && this.size === 0;
    }

    pop(): ListNode<T> | null {
        if (this.isEmpty()) return null;

        if (this.head && !this.head.next) {
            let current_node = this.head;
            this.head = null;
            this.size--;
            return current_node;
        }

        let current = this.head;

        while (current !== null && current.next && current.next.next) {
            current = current.next;
        }

        if (current) {
            const popped_node = current.next;
            current.next = null;
            this.size--;
            return popped_node;
        }

        return null;
    }

}

export default LinkedList;