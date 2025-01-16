package learning;

import java.util.Scanner;

public class work2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Float: ");
        float myFloat = scanner.nextFloat();
        System.out.println("Float Entered = " + myFloat);

        System.out.print("Enter Double: ");
        double myDouble = scanner.nextDouble();
        System.out.println("Double Entered = " + myDouble);

        System.out.print("Enter Text: ");
        String myString = scanner.next();
        System.out.println("Text Entered = " + myString);

        scanner.close();
    }
}
