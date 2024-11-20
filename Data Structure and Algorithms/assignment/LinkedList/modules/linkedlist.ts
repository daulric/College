/*
    This is a Linked List together with the Stack Implementation.
    This conntains all the stack features utilizing the last in first out method. 
*/

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

function ContainsSameValue(object_1: any, object_2: any) : any {
    if (object_1 === object_2) return true;

    if (object_1 === null && object_2 === null) return false;
    if (typeof object_1 !== "object" && typeof object_2 !== "object")  return false;

    const keys =Object.keys(object_2);
    if (keys.length === 0) return false;

    return keys.every(key => ContainsSameValue(object_1[key], object_2[key]));
}

class LinkedList<T> {
    #head: ListNode<T> | null = null;
    #size: number = 0;

    push(value: T) {
        const node = CreateNode(value);
        if (!this.#head) {
            this.#head = node;
            this.#size++;
            return;
        }

        let current = this.#head;

        while (current && current.next) {
            current = current.next;
        }

        current.next = node;
        this.#size++;
    }

    pop(): ListNode<T> | null {
        if (this.isEmpty()) return null;

        if (this.#head && !this.#head.next) {
            let current_node = this.#head;
            this.#head = null;
            this.#size--;
            return current_node;
        }

        let current = this.#head;

        while (current !== null && current.next && current.next.next) {
            current = current.next;
        }

        if (current) {
            const popped_node = current.next;
            current.next = null;
            this.#size--;
            return popped_node;
        }

        return null;
    }

    peek(): ListNode<T> | null {
        if (this.isEmpty()) return null;

        let current = this.#head;

        while (current && current.next !== null) {
            current = current.next;
        }

        return current;
    }

    isEmpty() : boolean {
        return !this.#head && this.#size === 0;
    }

    size() {
        return this.#size;
    }

    // Optional Methods
    remove(value: T) : void {

        if (!this.#head) return;

        if (ContainsSameValue(this.#head.value, value)) {
            this.#head = this.#head.next;
            this.#size--;
            return;
        }

        let current: ListNode<T> | null = this.#head;

        while (current && current.next) {
            if (ContainsSameValue(current.next.value, value)) {
                current.next = current.next.next;
                this.#size--;
                return;
            }

            current = current.next;
        }

    }

    sort(func: (a: T, b: T) => boolean) {
        if (!this.#head) return;

        let swapped;

        do {
            swapped = false;
            let current = this.#head;

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

    search(value: Partial<T>): [boolean, ListNode<T> | null ] {
        if (!this.#head) return [false, null] ;

        if (ContainsSameValue(this.#head.value, value)) {
            return [true, this.#head];
        }

        let current: ListNode<T> | null = this.#head;

        while (current !== null) {
            if (ContainsSameValue(current.value, value)) {
                return [true, current];
            }
            current = current.next;
        }

        return [false, null];
    }

    insert_start(value: T) {
        const node = CreateNode(value);
        
        if (!this.#head) {
            this.#head = node
            return;
        }

        node.next = this.#head;
        this.#head = node;
        this.#size++;
    }

    print() {
        let current = this.#head;
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

    clear() {
        this.#head = null;
        this.#size = 0;
    }

    toArray() : T[] | null{
        if (this.isEmpty()) return null;
    
        let array: T[] = [];
        let current = this.#head;
    
        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }
    
        return array;
    }

    toList(array: T[]) {
        array.map((value) => {
            this.push(value);
        })
    }

    map<C>(func: (value: T) => C) : LinkedList<C> {
        const new_list = new LinkedList<C>();
        let current = this.#head;

        while (current != null) {
            let new_value = func(current.value);
            new_list.push(new_value);
            current = current.next;
        }

        return new_list;
    }

    // This is for using this when updating state especially in React.
    transferTo(list: LinkedList<T>) {
        this.map((value) => {
            list.push(value);
        })
    }

}

export default LinkedList;