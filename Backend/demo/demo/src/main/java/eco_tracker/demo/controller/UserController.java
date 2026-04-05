package eco_tracker.demo.controller;

//package eco_tracker.demo.controller;

import eco_tracker.demo.model.User;
import eco_tracker.demo.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import eco_tracker.demo.service.UserService;
//import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins ="*") // Crucial for React connection
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userservice;

    // Add this to your User_Controller.java

@GetMapping("/{id}")
public ResponseEntity<User> getUserResult(@PathVariable Long id) {
    return userRepository.findById(id)
            .map(user -> ResponseEntity.ok(user))
            .orElse(ResponseEntity.notFound().build());
}

    // 1. LOGIN METHOD: Finds the user and sends their ID to the frontend
@PostMapping("/login")
public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
    // In a real app, you'd verify the password here
    Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());
    if(userOptional.isEmpty()){
        return ResponseEntity.status(404).body("Email not registered");
    }
    User user = userOptional.get();
    if (!user.getPassword().equals(loginRequest.getPassword())) {
        return ResponseEntity.status(401).body("Invalid password. Please try again.");
    }
    return ResponseEntity.ok(user);
           
}

// 2. UPDATED INPUT METHOD: Updates an existing user's footprint
@PutMapping("/{id}/footprint")
public ResponseEntity<User> updateFootprint(@PathVariable Long id, @RequestBody User footprintData) {
    return userRepository.findById(id).map(user -> {
        // Use your service to calculate based on new input
        double total = userservice.calculateFootprint(
            footprintData.getVehicleType(),
            footprintData.getDistance(),
            footprintData.getKwh()
        );
        
        user.setVehicleType(footprintData.getVehicleType());
        user.setDistance(footprintData.getDistance());
        user.setKwh(footprintData.getKwh());
        user.setTotalFootprint(total);
        
        return ResponseEntity.ok(userRepository.save(user));
    }).orElse(ResponseEntity.notFound().build());

    
}

@PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody User newUser) {
    if (userRepository.findByEmail(newUser.getEmail()).isPresent()) {
        return ResponseEntity.status(409).body("Email already registered!");
    }
    return ResponseEntity.ok(userRepository.save(newUser));
}
}
