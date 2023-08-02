package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.Product;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;

public class ProductUpdateDTO {

    @NotBlank(message = "Required field")
    private String name;

    private String description;

    @DecimalMin("0.01")
    @Digits(integer = 3, fraction = 2)
    private Double price;

    public ProductUpdateDTO() {
    }

    public ProductUpdateDTO(Product entity) {
        name = entity.getName();
        description = entity.getDescription();
        price = entity.getPrice();
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Double getPrice() {
        return price;
    }

}
