package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.OrderConfiguration;

public class OrderConfigurationOutputDTO {

    private Double quantity;
    private Double subTotal;
    private ConfigurationItemOutputDTO configurationItem;

    public OrderConfigurationOutputDTO() {
    }

    public OrderConfigurationOutputDTO(OrderConfiguration entity) {
        configurationItem = new ConfigurationItemOutputDTO(entity.getConfigurationItem());
        quantity = entity.getQuantity();
        subTotal = entity.getSubTotal();
    }

    public ConfigurationItemOutputDTO getConfigurationItem() {
        return configurationItem;
    }

    public Double getQuantity() {
        return quantity;
    }

    public Double getSubTotal() {
        return subTotal;
    }

}
