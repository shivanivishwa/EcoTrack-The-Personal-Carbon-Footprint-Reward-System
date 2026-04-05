package eco_tracker.demo.repository;
import java.util.Optional;
import eco_tracker.demo.model.User; // This pulls in your User entity
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // You don't need to write any code here for now!
    // JpaRepository gives you .save(), .findAll(), and .findById() automatically.
    Optional<User> findByEmail(String email);
    
}