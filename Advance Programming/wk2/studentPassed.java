package wk2;
import java.util.*;

public class studentPassed {
    static String checkScore2(int score) {
        return score >= 50 ? "Pass" : "Fail";
    }

    static String checkScore(int score) {
        if (score >= 50) return "Pass";
        return "Fail";
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println(checkScore(s.nextInt()));
        s.close();
    }
}
