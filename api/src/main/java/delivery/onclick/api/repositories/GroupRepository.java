package delivery.onclick.api.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import delivery.onclick.api.entities.Group;

public interface GroupRepository extends JpaRepository<Group, UUID> {
    
}
