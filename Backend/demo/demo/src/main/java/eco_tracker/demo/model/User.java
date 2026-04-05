package eco_tracker.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private Integer age;
    private String password;

    private String vehicleType;  // e.g., "PETROL_CAR", "EV", "BUS"
    private Double distance;     // Distance in km
             
    private Double kwh;          // Electricity usage
    
    private Double totalFootprint;
     
}