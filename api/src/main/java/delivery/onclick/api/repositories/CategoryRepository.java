package delivery.onclick.api.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import delivery.onclick.api.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, UUID> {
    
}
