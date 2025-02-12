package assignment3;

import javax.swing.*;

// JOption Assignment
public class assignment {

    public static void main(String[] args) {
        String name = JOptionPane.showInputDialog("Enter Name");
        String age = JOptionPane.showInputDialog("Enter Age");
        String address = JOptionPane.showInputDialog("Enter Address");

        double salary = Double.parseDouble(JOptionPane.showInputDialog("Enter Salary"));
        double reduction = salary * 0.05;

        JOptionPane.showMessageDialog(null, 
        "Name: " + name 
        + "\nAge: " + age 
        + "\nAddress: " + address
        + "\nSalary 5% Deduction: $" + reduction
        );

    }
    
}