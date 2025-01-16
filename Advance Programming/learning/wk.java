package learning;

import java.util.Scanner;

public class wk {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Number: ");
        int number = scanner.nextInt();
        System.out.println("Number You Entered: " + number );
        
        scanner.close();
    }
}
