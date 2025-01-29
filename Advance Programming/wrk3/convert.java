package wrk3;

public class convert {
    
    public static void main(String[] args) {
        System.out.println("5ft, 8in = " + convertToCm(5, 8) + "cm");
        System.out.println("68in = " + convertToCm(68) + "cm");
    }

    public static double convertToCm(int inches) {
        return inches * 2.54;
    }

    public static double convertToCm(int feet, int inches) {
        return convertToCm((feet * 12) + inches);
    }
}
