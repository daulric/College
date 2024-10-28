function Node(data) {
    return {
        data: data,
        left: null,
        right: null,
    }
}

function Insert_Value(node, value) {
    if (node.data > value) {

        if (!node.left) {
            node.left = Node(value);
        } else {
            Insert_Value(node.left, value);
        }

    } else if (node.data < value) {

        if (!node.right) {
            node.right = Node(value);
        } else {
            Insert_Value(node.right, value);
        }

    }
}

function Order(node) {
    if (!node) return;
    Order(node.left); // Smallest Number comes first;
    console.log(node.data);
    Order(node.right); // Larger Number comes last;
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (!this.root) {
            this.root = Node(data);
            return;
        }

        Insert_Value(this.root, data);
    }

    print() {
        console.log("Tree Order: \n");
        Order(this.root);
        console.log("\n")
    }
}

const tree = new BinaryTree();
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(5)
tree.insert(6)
tree.insert(4)

tree.print();