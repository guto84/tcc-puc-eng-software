package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Order;
import delivery.onclick.api.entities.OrderItem;
import delivery.onclick.api.entities.enums.OrderStatus;

public class OrderOrderItemsProductsOrderConfigurationsDTO {

    private UUID id;
    private String name;
    private String address;
    private String addressNumber;
    private String addressComplement;
    private String district;
    private String zipcode;
    private String phone;
    private OrderStatus status;
    private Date createdAt;
    private Double total;
    private List<OrderItemProductsOrderConfigurationsDTO> orderItems = new ArrayList<>();

    public OrderOrderItemsProductsOrderConfigurationsDTO() {
    }

    public OrderOrderItemsProductsOrderConfigurationsDTO(Order entity) {
        id = entity.getId();
        name = entity.getName();
        address = entity.getAddress();
        addressNumber = entity.getAddressNumber();
        addressComplement = entity.getAddressComplement();
        district = entity.getDistrict();
        zipcode = entity.getZipcode();
        phone = entity.getPhone();
        status = entity.getStatus();
        createdAt = entity.getCreatedAt();
        total = entity.getSumTotal();
        for (OrderItem x : entity.getOrderItems()) {
            orderItems.add(new OrderItemProductsOrderConfigurationsDTO(x));
        }
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getAddressNumber() {
        return addressNumber;
    }

    public String getAddressComplement() {
        return addressComplement;
    }

    public String getDistrict() {
        return district;
    }

    public String getZipcode() {
        return zipcode;
    }

    public String getPhone() {
        return phone;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Double getTotal() {
        return total;
    }

    public List<OrderItemProductsOrderConfigurationsDTO> getOrderItems() {
        return orderItems;
    }

}
