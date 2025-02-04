package assignment1;

import java.util.*;

public class Work1 {

    public static void displayHighScorePosition(String playerName, int playerPosition) {
        System.out.println(playerName + " managed to get into position " + playerPosition + " on the high score list");
    }

    public static int calculateHighScorePosition(int playerScore) {
        if (playerScore >= 1000) return 1;
        if  (playerScore >= 500 && playerScore < 1000) return 2;
        if (playerScore >= 100 && playerScore < 500) return 3;
        return 4;
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter Player Name: ");
        String playerName = s.next();
        System.out.print("Enter Player Score: ");
        int playerScore = s.nextInt();
        
        int position = calculateHighScorePosition(playerScore);
        displayHighScorePosition(playerName, position);
        s.close();
    }
}