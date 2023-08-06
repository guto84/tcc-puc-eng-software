package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.Order;
import delivery.onclick.api.entities.enums.OrderStatus;
import jakarta.validation.constraints.NotBlank;

public class OrderUpdateDTO {

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

    @NotBlank(message = "Required field")
    private OrderStatus status;

    public OrderUpdateDTO() {
    }

    public OrderUpdateDTO(Order entity) {
        name = entity.getName();
        address = entity.getAddress();
        addressNumber = entity.getAddressNumber();
        addressComplement = entity.getAddressComplement();
        district = entity.getDistrict();
        zipcode = entity.getZipcode();
        phone = entity.getPhone();
        status = entity.getStatus();
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

}
