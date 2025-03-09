package Lines;

import javax.swing.*;
import java.awt.*;

public class LineDrawing extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        int width = getWidth();
        int height = getHeight();

        // Draw the two main lines
        //g.drawLine(0, 0, width, height);
        //g.drawLine(0, height, width, 0);

        // Draw the additional lines
        for (int n = 1; n < 10; n++) {
            g.drawLine(0, 0, width * n / 10, height);
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Line Drawing");
        LineDrawing panel = new LineDrawing();
        frame.add(panel);
        frame.setSize(400, 400); // Set window size
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}