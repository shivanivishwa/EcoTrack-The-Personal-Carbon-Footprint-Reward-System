package eco_tracker.demo.service;

import org.springframework.stereotype.Service;
@Service
public class UserService {
    public double calculateFootprint(String vehicleType, double distance,  double kwh) {
        // 1. Get Transport Factor
        double transportFactor = switch (vehicleType.toUpperCase()) {
            case "PETROL_CAR" -> 0.17;
            case "DIESEL_CAR" -> 0.19;
            case "EV" -> 0.05;
            case "BUS" -> 0.09;
            case "METRO" -> 0.03;
            default -> 0.0;
        };

       
        // 3. Electricity Factor
        double energyFactor = 0.45; // kg CO2 per kWh

        // 4. Final Math
        return (distance * transportFactor) +  (kwh * energyFactor);
    }
    // inside CarbonService.java


}
    
