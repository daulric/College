package assignment2;

import javax.swing.*;

class JavaSwingClasss {
    JFrame f;

    JavaSwingClasss() {
        f = new JFrame("Using Inheritance");
        JButton b = new JButton("Click Me");
        b.setBounds(130, 100, 100, 50);
        f.add(b);
        f.setSize(300, 400);
        f.setLayout(null);
        f.setVisible(true);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public static void main(String[] args) {
        new JavaSwingClasss();
    }
    
}