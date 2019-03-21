package mistertea;

import behaviours.Move;
import behaviours.Say;
import vehicles.Vehicle;

public class Main {

    public static void main(String[] args) {

        Say.hello();

        Vehicle bicycle = new Vehicle("Bicyclette", "Vélocipède", 12);
        Vehicle citadine = new Vehicle("Citadine", "Voiture", 9000);
        Vehicle semiremorque = new Vehicle("Semi-Remorque", "Camion", 33000);

        Vehicle chosenVehicle   = semiremorque;
        String directionVehicle = "up";
        System.out.println("le " + chosenVehicle.getType() + " \"" + chosenVehicle.getNom() + "\" " + Move.go(directionVehicle) + "!" + "\nIl pèse " + chosenVehicle.getPoids() + "Kg !");
    }

}
