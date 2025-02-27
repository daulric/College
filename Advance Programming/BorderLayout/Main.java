package BorderLayout;

import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 500);
        frame.setLayout(new BorderLayout(10, 10));
        frame.setVisible(true);

        JPanel panel1 = new Panel(Color.red);
        JPanel panel2 = new Panel(Color.green);
        JPanel panel3 = new Panel(Color.yellow);
        JPanel panel4 = new Panel(Color.magenta);
        JPanel panel5 = new Panel(Color.blue);

        frame.add(panel1, BorderLayout.NORTH);
        frame.add(panel2, BorderLayout.WEST);
        frame.add(panel3, BorderLayout.EAST);
        frame.add(panel4, BorderLayout.SOUTH);
        frame.add(panel5, BorderLayout.CENTER);
        frame.setVisible(true);
    }
}

class Panel extends JPanel {
    Panel(Color color) {
        this.setPreferredSize(new Dimension(100, 100));
        this.setBackground(color);
    }
}