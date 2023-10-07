package delivery.onclick.api.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import delivery.onclick.api.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, UUID> {
    
}
