package delivery.onclick.api.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import delivery.onclick.api.entities.Product;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    
    	@Query("SELECT t1 FROM Product t1 "
			+ "LEFT JOIN FETCH t1.category t2 "
			+ "LEFT JOIN FETCH t2.group t3 "
			+ "LEFT JOIN FETCH t3.company t4 "
			+ "LEFT JOIN FETCH t2.configurations t5 "
			+ "LEFT JOIN FETCH t5.configurationItems t6 "
			+ "WHERE t1.id = :id")
	Optional<Product> findByIdConfigurations(UUID id);
}

// ProductCategoryConfigurationsConfigurationItemsOutputDTO