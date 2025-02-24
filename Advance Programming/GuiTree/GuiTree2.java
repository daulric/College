import javax.swing.*;
import java.awt.*;

public class GuiTree2 extends JFrame {
    public GuiTree2() {
        super("Gui Tree Flowed Example");
        this.getContentPane().setLayout(new FlowLayout());
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JLabel label;
        JButton button1, button2;
        JPanel panel1, panel2;

        // Contructors
        panel1 = new JPanel();
        panel2 = new JPanel();
        label = new JLabel();
        button1 = new JButton();
        button2 = new JButton();

        this.getContentPane().add(panel1);
        panel1.add(label);
        this.getContentPane().add(panel2);
        panel2.add(button1);
        panel2.add(button2);
        this.pack();
        this.setVisible(true);

    }
}
