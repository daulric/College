package practice;

import java.util.*;

public class Greeting {

    // Greetings
    static void greetName(Scanner input) {
        
    }

    // Add 2 Intergers
    static int add(int int1, int int2) {
        return int1 + int2;
    }

    //Floating Numbers
    static void printFloatingNumber(Scanner input) {
        System.out.print("Enter Float Number: ");
        float num = input.nextFloat();
        System.out.println("Float Number Entered: " + num);
    }

    // Print String Lengh
    static void getStringLength(Scanner input) {
        System.out.print("Enter String");
        String parse = input.next();
        System.out.print("String Length: " + parse.length());
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter Name: ");
        String name = input.next();
        System.out.println("Hello " + name);

        System.out.print("Enter 1st Number: ");
        int num1 = input.nextInt();
        System.out.print("Enter 2nd Number: ");
        int num2 = input.nextInt();
        int sum = add(num1, num2);
        System.out.println("Total Sum is " + sum);

        printFloatingNumber(input);
        getStringLength(input);

        input.close();
    }
}