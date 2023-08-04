package delivery.onclick.api.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import delivery.onclick.api.entities.ConfigurationItem;

public interface ConfigurationItemRepository extends JpaRepository<ConfigurationItem, UUID> {
    
}
