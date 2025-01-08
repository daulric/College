public class beginning {
    public static void main(String[] args) {
        System.out.println("hello");

        Dog dog = new Dog();
        dog.bark();;
    }
}

class Animal {
    void sound(String animalString) {
        System.out.println("new animal " + animalString);
    }
}

class Dog extends Animal {
    void bark() {
        sound("dog");
    }
}