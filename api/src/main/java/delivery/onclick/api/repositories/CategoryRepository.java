package delivery.onclick.api.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import delivery.onclick.api.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, UUID> {

    @Query("SELECT t1 FROM Category t1 "
            + "JOIN FETCH t1.products t2 "
            + "JOIN FETCH t1.group t3 "
            + "JOIN FETCH t3.company t4 "
            + "WHERE t1.id = :id")
    Optional<Category> findByIdProducts(UUID id);
}
