package assignment2;

import javax.swing.*;

public class JavaSwingClass {

    public static void main(String[] args) {
        // Using normal mode
        JFrame f = new JFrame("Using the Normal Mode");
        JButton b = new JButton("Click Me");
        b.setBounds(130,100,100,100);
        f.add(b);
        f.setSize(250,300);
        f.setLayout(null);
        f.setVisible(true);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}