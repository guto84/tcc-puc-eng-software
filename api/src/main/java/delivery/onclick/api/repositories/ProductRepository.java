package delivery.onclick.api.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import delivery.onclick.api.entities.Product;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    
}
