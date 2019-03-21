package vehicles;

public class Vehicle {
    protected String nom      = "name";
    protected String type     = "type";
    protected int    poids    = 0;
    public Vehicle(String name, String type, int weight) {
        this.nom    =name;
        this.type   =type;
        this.poids  =weight;
    }

    @Override
    public String toString() {
        return  "Vehicle{"  +
                "nom='"     + nom   + '\'' +
                ", type='"  + type  + '\'' +
                ", poids="  + poids +
                '}';
    }

    public String getNom() {
        return nom;
    }

    public String getType() {
        return type;
    }

    public int getPoids() {
        return poids;
    }
}
