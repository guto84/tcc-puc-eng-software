package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.OrderConfiguration;

public class OrderConfigurationOutputDTO {

    private OrderItemOutputDTO orderItem;
    private ConfigurationItemOutputDTO configurationItem;
    private Double quantity;

    public OrderConfigurationOutputDTO() {
    }

    public OrderConfigurationOutputDTO(OrderConfiguration entity) {
        orderItem = new OrderItemOutputDTO(entity.getOrderItem());
        configurationItem = new ConfigurationItemOutputDTO(entity.getConfigurationItem());
        quantity = entity.getQuantity();
    }

    public OrderItemOutputDTO getOrderItem() {
        return orderItem;
    }

    public ConfigurationItemOutputDTO getConfigurationItem() {
        return configurationItem;
    }

    public Double getQuantity() {
        return quantity;
    }

}
