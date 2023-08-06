package delivery.onclick.api.entities.pk;

import java.io.Serializable;
import java.util.Objects;

import delivery.onclick.api.entities.ConfigurationItem;
import delivery.onclick.api.entities.OrderItem;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Embeddable
public class OrderConfigurationPK implements Serializable {

	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name = "order_item_id")
	private OrderItem orderItem;
	
	@ManyToOne
	@JoinColumn(name = "configuration_item_id")
	private ConfigurationItem configurationItem;

	public OrderConfigurationPK() {

	}

	public OrderConfigurationPK(OrderItem orderItem, ConfigurationItem configurationItem) {
		this.orderItem = orderItem;
		this.configurationItem = configurationItem;
	}

	public OrderItem getOrderItem() {
		return orderItem;
	}

	public void setOrderItem(OrderItem orderItem) {
		this.orderItem = orderItem;
	}

	public ConfigurationItem getConfigurationItem() {
		return configurationItem;
	}

	public void setConfigurationItem(ConfigurationItem configurationItem) {
		this.configurationItem = configurationItem;
	}

	@Override
	public int hashCode() {
		return Objects.hash(configurationItem, orderItem);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OrderConfigurationPK other = (OrderConfigurationPK) obj;
		return Objects.equals(configurationItem, other.configurationItem) && Objects.equals(orderItem, other.orderItem);
	}

	@Override
	public String toString() {
		return "OrderConfigurationPK [orderItem=" + orderItem + ", configurationItem=" + configurationItem + "]";
	}
	
	
}
