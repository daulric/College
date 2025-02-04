package learning.stuff;

import javax.swing.*;
import java.awt.*;

public class MainFrame extends JFrame {
    private JTextArea textArea;
    private JButton btn;

    MainFrame() {
        super("Hello World");
        setLayout(new BorderLayout());
        textArea = new JTextArea();
        btn = new JButton("Click Me");
        add(btn, BorderLayout.CENTER);
    }
}
