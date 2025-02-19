import javax.swing.*;

public class Addition {
    public static void main(String[] args) {
        String response;
        response = JOptionPane.showInputDialog("What is your name: ");
        String name = response;

        response = JOptionPane.showInputDialog("Type a Number: ");
        int a = Integer.parseInt(response);

        response = JOptionPane.showInputDialog("What is your name: ");
        int b = Integer.parseInt(response);

        int sum = a + b;
        String message = "Hi " + name + "; the sum of your numbers are " + sum;
        JOptionPane.showMessageDialog(null, message);
    }
}
