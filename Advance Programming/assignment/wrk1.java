package assignment;

public class wrk1 { //Class Here

    public void displayHighScorePosition(String playerName, int playerPosition) {
        System.out.println(playerName + " managed to get into position " + playerPosition + " on the high score list");
    }

    public int calculateHighScorePosition(int playerScore) {
        if (playerScore >= 1000) return 1;
        if  (playerScore >= 500 && playerScore < 1000) return 2;
        if (playerScore >= 100 && playerScore < 500) return 3;
        return 4;
    }

    public static void main(String[] args) {
        /*Scanner s = new Scanner(System.in);
        System.out.print("Enter Player Name: ");
        String playerName = s.next();
        System.out.print("Enter Player Position: ");
        int playerScore = s.nextInt();

        displayHighScorePosition(playerName, playerScore);

        System.out.print("Enter Highscore: ");
        int number = s.nextInt();
        System.out.println(calculateHighScorePosition(number));
        s.close(); */
    }
}