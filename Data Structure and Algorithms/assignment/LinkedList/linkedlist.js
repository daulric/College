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

    search(value) {

        if (!this.head) {
            console.log("Head not found");
            return null;
        }

        if ( this.head.value === value) {
            return this.head;
        }

        let current = this.head.next;
        
        while (current && current.value !== value) {
            current = current.next;
        }

        if (current) {
            return current;
        } else {
            console.log("Not Available in the List");
            return null;
        };

    }

    insert_start(value) {
        let node = CreateNode(value);
        node.next = this.head;
        this.head = node;
    }

}

module.exports = LinkedList;