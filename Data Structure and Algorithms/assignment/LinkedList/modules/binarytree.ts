interface BinaryNode<T> {
    value: number;
    left: BinaryNode<T> | null,
    right: BinaryNode<T> | null;
}

function CreateNode<T>(value: number) : BinaryNode<T> {
    return {
        value: value,
        left: null,
        right: null,
    }
}


class BinaryTree<T> {
    #root: BinaryNode<T> | null = null;

    #getSize<T>(node: BinaryNode<T> | null) : number {
        if (node === null) return 0;
        return 1 + this.#getSize(node.left) + this.#getSize(node.right);
    }

    #InsertValue<T>(node: BinaryNode<T>, value: number) {
        if (node.value > value) {
            if  (!node.left) {
                node.left = CreateNode(value);
                return;
            }
    
            this.#InsertValue(node.left, value);
            return;
        }
    
        if (node.value < value) {
            if (!node.right) {
                node.right = CreateNode(value);
                return;
            }
    
            this.#InsertValue(node.right, value);
            return;
        }
    
    }

    #PrintNode<T>(node: BinaryNode<T>) {
        if (!node) return;
        if (node.left) this.#PrintNode(node.left);
        console.log(node.value);
        if (node.right) this.#PrintNode(node.right);
    }

    #toArray(node: BinaryNode<T> | null, arr: number[]) : void {
        if (node === null) return;
        this.#toArray(node.left, arr);
        arr.push(node.value);
        this.#toArray(node.right, arr);
    }


    insert(value: number) {
        if (!this.#root) {
            this.#root = CreateNode(value);
            return;
        }

        this.#InsertValue(this.#root, value);
    }

    size() : number | null {
        if (!this.#root) return null;
        return this.#getSize(this.#root);
    }

    print() {
        if (!this.#root) return;
        this.#PrintNode(this.#root);
        console.log("\n");
    }

    toArray() : number[] {
        const array : number[] = [];
        this.#toArray(this.#root, array);
        return array;
    }

}

export default BinaryTree;