public class idk {

    public static void main(String[] args) {
        hello idk = new hello("Ulric");
        int added = idk.add(9, 10);
        System.out.println(added);
    }

}

class hello {
    private String name;

    hello(String name) {
        System.out.println("hmmmm");
        this.name = name;
    }

    int add(int a, int b) {
        System.out.println(name + " added " + a + " and " + b);
        return a+b;
    }
}