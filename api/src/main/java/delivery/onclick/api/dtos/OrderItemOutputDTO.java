package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.OrderItem;

public class OrderItemOutputDTO {

    private UUID id;
    private Double quantity;

    public OrderItemOutputDTO() {
    }

    public OrderItemOutputDTO(OrderItem entity) {
        id = entity.getId();
        quantity = entity.getQuantity();
    }

    public UUID getId() {
        return id;
    }

    public Double getQuantity() {
        return quantity;
    }

}
