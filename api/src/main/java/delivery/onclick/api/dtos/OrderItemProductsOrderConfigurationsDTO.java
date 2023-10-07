package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.OrderConfiguration;
import delivery.onclick.api.entities.OrderItem;

public class OrderItemProductsOrderConfigurationsDTO {

    private UUID id;
    private Double quantity;
    private ProductOutputDTO product;
    private List<OrderConfigurationOutputDTO> orderConfigurations = new ArrayList<>();
    private Double subTotal;

    public OrderItemProductsOrderConfigurationsDTO() {
    }

    public OrderItemProductsOrderConfigurationsDTO(OrderItem entity) {
        id = entity.getId();
        quantity = entity.getQuantity();
        product = new ProductOutputDTO(entity.getProduct());
        subTotal = entity.getSubTotal();
        for (OrderConfiguration x : entity.getOrderConfigurations()) {
            orderConfigurations.add(new OrderConfigurationOutputDTO(x));
        }
    }

    public UUID getId() {
        return id;
    }

    public Double getQuantity() {
        return quantity;
    }

    public ProductOutputDTO getProduct() {
        return product;
    }

    public List<OrderConfigurationOutputDTO> getOrderConfigurations() {
        return orderConfigurations;
    }

    public Double getSubTotal() {
        return subTotal;
    }

}
