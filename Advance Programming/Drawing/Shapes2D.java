import javax.swing.*;
import java.awt.*;

public class Shapes2D {
    public static void main(String[] args) {
        JFrame fr = new JFrame();
        fr.setBounds(10, 10, 500, 500);
        fr.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel pn = new JPanel() {
            @Override
            public void paint(Graphics g) {
                g.setColor(Color.RED);
                g.drawRect(10, 10, 100, 100);
                g.fillRect(10, 10, 100, 100);
                g.setColor(Color.BLUE);
                g.fillOval(10, 140, 10, 100);
                

                Graphics2D g2 = (Graphics2D) g.create();
                g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
                g2.setColor(Color.RED);
                g2.fillOval(10, 140, 100, 100);
                g2.fill(new Polygon(new int[] {50, 20, 80}, new int[] {50, 80, 80}, 3));
            }
        };

        fr.add(pn);
        fr.setVisible(true);
    }
}