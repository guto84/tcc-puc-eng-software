package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;

import delivery.onclick.api.entities.OrderConfiguration;
import delivery.onclick.api.entities.OrderItem;

public class OrderItemOrderConfigurationOutputDTO {

    private Double quantity;
    private ProductOutputDTO product;
    private OrderOutputDTO order;
    private List<OrderConfigurationOutputDTO> orderConfigurations = new ArrayList<>();

    public OrderItemOrderConfigurationOutputDTO() {
    }

    public OrderItemOrderConfigurationOutputDTO(OrderItem entity) {
        quantity = entity.getQuantity();
        product = new ProductOutputDTO(entity.getProduct());
        order = new OrderOutputDTO(entity.getOrder());
        for (OrderConfiguration x : entity.getOrderConfigurations()) {
            orderConfigurations.add(new OrderConfigurationOutputDTO(x));
        }
    }

    public Double getQuantity() {
        return quantity;
    }

    public ProductOutputDTO getProduct() {
        return product;
    }

    public OrderOutputDTO getOrder() {
        return order;
    }

    public List<OrderConfigurationOutputDTO> getOrderConfigurations() {
        return orderConfigurations;
    }

}
