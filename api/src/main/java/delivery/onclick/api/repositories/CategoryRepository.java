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

    @Query("SELECT t1 FROM Category t1 "
            + "LEFT JOIN FETCH t1.configurations t2 "
            + "LEFT JOIN FETCH t1.group t3 "
            + "JOIN FETCH t3.company t4 "
            + "WHERE t1.id = :id")
    Optional<Category> findByIdConfigurations(UUID id);

    @Query("SELECT t1 FROM Category t1 "
            + "LEFT JOIN FETCH t1.configurations t2 "
            + "LEFT JOIN FETCH t2.configurationItems t3 "
            + "LEFT JOIN FETCH t1.group t4 "
            + "LEFT JOIN FETCH t1.products t5 "
            + "LEFT JOIN FETCH t4.company t6 "
            + "WHERE t1.id = :id")
    Optional<Category> findByIdConfigurationsConfigurationItems(UUID id);
}
