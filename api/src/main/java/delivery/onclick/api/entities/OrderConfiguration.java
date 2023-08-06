package delivery.onclick.api.entities;

import delivery.onclick.api.entities.pk.OrderConfigurationPK;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_configurations")
public class OrderConfiguration {

    @EmbeddedId
    private OrderConfigurationPK id = new OrderConfigurationPK();
    private Double quantity;

    public OrderConfiguration() {
    }

    public OrderConfiguration(OrderItem orderItem, ConfigurationItem configurationItem, Double quantity) {
        id.setOrderItem(orderItem);
        id.setConfigurationItem(configurationItem);
        this.quantity = quantity;
    }

    public OrderItem getOrderItem() {
        return id.getOrderItem();
    }

    public void setOrderItem(OrderItem orderItem) {
        id.setOrderItem(orderItem);
    }

    public ConfigurationItem getConfigurationItem() {
        return id.getConfigurationItem();
    }

    public void setConfigurationItem(ConfigurationItem configurationItem) {
        id.setConfigurationItem(configurationItem);
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public Double getSubTotal() {
        return id.getConfigurationItem().getPrice() * quantity;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((quantity == null) ? 0 : quantity.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        OrderConfiguration other = (OrderConfiguration) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (quantity == null) {
            if (other.quantity != null)
                return false;
        } else if (!quantity.equals(other.quantity))
            return false;
        return true;
    }

    

}
