package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;

import delivery.onclick.api.entities.Order;
import delivery.onclick.api.entities.OrderItem;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class OrderInsertDTO {

    @NotBlank(message = "Required field")
    private String name;

    @NotBlank(message = "Required field")
    private String address;

    @NotBlank(message = "Required field")
    private String addressNumber;

    private String addressComplement;

    @NotBlank(message = "Required field")
    private String district;

    @NotBlank(message = "Required field")
    private String zipcode;

    @NotBlank(message = "Required field")
    private String phone;

    @NotNull(message = "Required field")
    private CompanyOutputDTO company;

    private List<OrderItemOrderConfigurationOutputDTO> orderItems = new ArrayList<>();

    public OrderInsertDTO() {
    }

    public OrderInsertDTO(Order entity) {
        name = entity.getName();
        address = entity.getAddress();
        addressNumber = entity.getAddressNumber();
        addressComplement = entity.getAddressComplement();
        district = entity.getDistrict();
        zipcode = entity.getZipcode();
        phone = entity.getPhone();
        company = new CompanyOutputDTO(entity.getCompany());
        for (OrderItem x : entity.getOrderItems()) {
            orderItems.add(new OrderItemOrderConfigurationOutputDTO(x));
        }
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

    public CompanyOutputDTO getCompany() {
        return company;
    }

    public List<OrderItemOrderConfigurationOutputDTO> getOrderItems() {
        return orderItems;
    }

}
