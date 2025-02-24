import javax.swing.*;

public class LovelyCat extends JFrame {

    public LovelyCat() {
        super("Cat");
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(null);
        this.setSize(250, 500);

        ImageIcon icon = new ImageIcon(getClass().getResource("cat.jpeg"));

        JLabel label1 = new JLabel("label1", icon, JLabel.LEFT);
        label1.setBounds(30, 30, 100, 50);
        label1.setHorizontalTextPosition(JLabel.RIGHT);
        label1.setVerticalTextPosition(JLabel.CENTER);

        JLabel label2 = new JLabel("label2", icon, JLabel.RIGHT);
        label2.setBounds(200, 30, 100, 50);
        label2.setHorizontalTextPosition(JLabel.LEFT);
        label2.setVerticalTextPosition(JLabel.CENTER);

        JLabel label3 = new JLabel("label3", icon, JLabel.LEFT);
        label3.setBounds(30, 150, 100, 50);
        label3.setHorizontalTextPosition(JLabel.RIGHT);
        label3.setVerticalTextPosition(JLabel.CENTER);

        JLabel label4 = new JLabel("label4", icon, JLabel.RIGHT);
        label4.setBounds(200, 150, 100, 50);
        label4.setHorizontalTextPosition(JLabel.LEFT);
        label4.setVerticalTextPosition(JLabel.CENTER);

        JLabel label5 = new JLabel("label5", icon, JLabel.LEFT);
        label5.setBounds(30, 250, 100, 50);
        label5.setHorizontalTextPosition(JLabel.RIGHT);
        label5.setVerticalTextPosition(JLabel.CENTER);

        this.add(label1);
        this.add(label2);
        this.add(label3);
        this.add(label4);
        this.add(label5);

        this.setVisible(true);
    }

    public static void main(String[] args) {
        new LovelyCat();
    }
}
