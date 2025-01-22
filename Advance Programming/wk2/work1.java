package wk2;

public class work1 {


    static int factorial(int num) {
        if (num <= 1) return 1;
        return num * factorial(num - 1);
    }

    public static void main(String[] args) {
        int number = 0;

        if (number > 0) {
            System.out.println("This number is positive");
        } else if (number < 0) {
            System.out.println("The number is negative");
        } else {
            System.out.println("the number is 0");
        }

        int fac = factorial(33); // 33 is the max output
        System.out.println(fac);
    }
    
}