import javax.swing.*;
import java.awt.*;

public class drawing extends JFrame {

    public drawing() {
        setTitle("Diagonal Line Drawer");
        setSize(400, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
    }

    public void paint(Graphics g) {
        super.paint(g);
        
        int width = getWidth();
        int height = getHeight();

        g.drawLine(0, 0, width, height);
        g.drawLine(0, height, width, 0);


    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            drawing graphics = new drawing();
            graphics.setVisible(true);
        });
    }
}