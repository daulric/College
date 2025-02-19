import javax.swing.*;

public class Work {
    public static void main(String[] args) {
        String name, message;
        name = JOptionPane.showInputDialog("What is your name");
        message = String.format("Welcome, %s, to java Programming!", name);
        JOptionPane.showMessageDialog(null, message);
    }
}