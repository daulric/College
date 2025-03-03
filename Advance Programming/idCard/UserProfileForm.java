package idCard;

import javax.swing.*;
import java.awt.*;

public class UserProfileForm extends JFrame {
    private JTextField firstNameField, lastNameField, ageField;
    private JPanel picturePanel;
    private JButton upButton, downButton, enterButton, cancelButton, undoButton;
    
    public UserProfileForm() {
        ImageIcon icon = new ImageIcon(getClass().getResource("cat.jpeg"));
        ImageIcon icon2 = new ImageIcon(getClass().getResource("capy.jpeg"));
        // Set up the frame
        setTitle("User Profile");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        // Create main panel with blue border
        JPanel mainPanel = new JPanel(new BorderLayout());
        mainPanel.setBorder(BorderFactory.createLineBorder(new Color(0, 120, 190), 20));
        
        // Create header panel with "Icon" text
        JPanel headerPanel = new JPanel();
        headerPanel.setBackground(new Color(0, 120, 190));
        headerPanel.setLayout(new BorderLayout());
        
        JLabel iconLabel = new JLabel(icon);
        iconLabel.setFont(new Font("Arial", Font.BOLD, 16));
        iconLabel.setOpaque(false);
        headerPanel.add(iconLabel, BorderLayout.WEST);
        
        // Create form panel
        JPanel formPanel = new JPanel(null); // Using null layout for absolute positioning
        formPanel.setBackground(Color.WHITE);
        
        // Add form labels
        JLabel firstNameLabel = new JLabel("First Name");
        firstNameLabel.setBounds(140, 110, 150, 25);
        firstNameLabel.setFont(new Font("Arial", Font.PLAIN, 18));
        
        JLabel lastNameLabel = new JLabel("Last Name");
        lastNameLabel.setBounds(140, 170, 150, 25);
        lastNameLabel.setFont(new Font("Arial", Font.PLAIN, 18));
        
        JLabel ageLabel = new JLabel("Age");
        ageLabel.setBounds(140, 250, 150, 25);
        ageLabel.setFont(new Font("Arial", Font.PLAIN, 18));
        
        // Add form fields
        firstNameField = new JTextField();
        firstNameField.setBounds(310, 100, 370, 40);
        firstNameField.setBackground(new Color(20, 90, 120));
        firstNameField.setForeground(Color.WHITE);
        
        lastNameField = new JTextField();
        lastNameField.setBounds(310, 160, 370, 40);
        lastNameField.setBackground(new Color(20, 90, 120));
        lastNameField.setForeground(Color.WHITE);
        
        ageField = new JTextField();
        ageField.setBounds(310, 240, 370, 40);
        ageField.setBackground(new Color(20, 90, 120));
        ageField.setForeground(Color.WHITE);
        
        // Create picture panel
        picturePanel = new JPanel();
        picturePanel.setBounds(740, 100, 200, 180);
        picturePanel.setBorder(BorderFactory.createLineBorder(new Color(0, 90, 150), 1));
        picturePanel.setBackground(Color.WHITE);
        
        JLabel pictureLabel = new JLabel(icon2);
        pictureLabel.setFont(new Font("Arial", Font.PLAIN, 16));
        picturePanel.add(pictureLabel);
        
        // Create buttons
        upButton = new JButton("UP");
        upButton.setBounds(125, 390, 80, 40);
        upButton.setBackground(Color.WHITE);
        upButton.setBorder(BorderFactory.createLineBorder(new Color(0, 120, 0), 2));
        
        downButton = new JButton("Down");
        downButton.setBounds(125, 450, 80, 40);
        downButton.setBackground(Color.WHITE);
        downButton.setBorder(BorderFactory.createLineBorder(new Color(0, 120, 0), 2));
        
        enterButton = new JButton("Enter");
        enterButton.setBounds(305, 420, 120, 40);
        enterButton.setBackground(Color.WHITE);
        enterButton.setBorder(BorderFactory.createLineBorder(new Color(0, 120, 0), 2));
        
        cancelButton = new JButton("Cancel");
        cancelButton.setBounds(530, 420, 120, 40);
        cancelButton.setBackground(Color.WHITE);
        cancelButton.setBorder(BorderFactory.createLineBorder(new Color(0, 120, 0), 2));
        
        undoButton = new JButton("Undo");
        undoButton.setBounds(760, 420, 120, 40);
        undoButton.setBackground(Color.WHITE);
        undoButton.setBorder(BorderFactory.createLineBorder(new Color(0, 120, 0), 2));
        
        // Add components to form panel
        formPanel.add(firstNameLabel);
        formPanel.add(lastNameLabel);
        formPanel.add(ageLabel);
        formPanel.add(firstNameField);
        formPanel.add(lastNameField);
        formPanel.add(ageField);
        formPanel.add(picturePanel);
        formPanel.add(upButton);
        formPanel.add(downButton);
        formPanel.add(enterButton);
        formPanel.add(cancelButton);
        formPanel.add(undoButton);
        
        // Add panels to main panel
        mainPanel.add(headerPanel, BorderLayout.NORTH);
        mainPanel.add(formPanel, BorderLayout.CENTER);
        
        // Add main panel to frame
        add(mainPanel);
        
        // Center the frame on screen
        setLocationRelativeTo(null);
        setVisible(true);
    }
    
    public static void main(String[] args) {
        new UserProfileForm();
    }
}