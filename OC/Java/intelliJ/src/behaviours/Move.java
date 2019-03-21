package behaviours;

public class Move {
    public static String go(String direction){
        String dir="";
        switch (direction) {
            case "up":
                dir = "monte";
                break;
            case "down":
                dir = "descend";
                break;
            case "left":
                dir = "va à gauche";
                break;
            case "right":
                dir = "va à droite";
                break;
        } return dir;
    }
}
