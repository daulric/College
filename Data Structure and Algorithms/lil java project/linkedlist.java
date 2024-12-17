class Node<T> {
    T data;
    Node<T> next;

    Node(T data) {
        this.data = data;
        this.next = null;
    }
}


public class linkedlist<T> {
    private Node<T> head;
    private int size;

    public linkedlist() {
        head = null;
        size = 0;
    }

    public void push(T value) {

        Node<T> newNode = new Node<T>(value);

        if (this.head == null) {
            this.head = newNode;
            this.size++;
            return;
        }

        Node<T> current = this.head;

        while (current != null && current.next != null) {
            current = current.next;
        }

        current.next = newNode;
        return;
    }

    public Node<T> pop() {
        if (this.isEmpty()) {
            return null;
        }

        Node<T> current = this.head;

        if (this.head != null && this.head.next == null) {
            Node<T> currentNode = this.head;
            this.head = null;
            this.size--;
            return currentNode;
        }

        while (current.next != null && current.next.next != null) {
            current = current.next;
        }

        Node<T> lastNode = current.next;
        current.next = null;
        this.size--;
        return lastNode;
    }

    public boolean isEmpty() {
        return (this.head == null && this.size == 0);
    }

    public void print() {
        Node<T> current = this.head;

        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }

        System.out.println();
    }
}
