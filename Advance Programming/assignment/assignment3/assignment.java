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
        double new_salary = salary - reduction;

        JOptionPane.showMessageDialog(null, 
        "Name: " + name 
        + "\nAge: " + age 
        + "\nAddress: " + address
        + "\nSalary After 5% Deduction: $" + new_salary
        );

    }
    
}