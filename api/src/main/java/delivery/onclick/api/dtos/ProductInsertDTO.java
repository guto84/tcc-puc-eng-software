package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.Product;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class ProductInsertDTO {

    @NotBlank(message = "Required field")
    private String name;

    private String description;

    @DecimalMin("0.01")
    @Digits(integer = 3, fraction = 2)
    private Double price;

    @NotNull(message = "Required field")
    private CategoryOutputDTO category;

    public ProductInsertDTO() {
    }

    public ProductInsertDTO(Product entity) {
        this.name = entity.getName();
        this.description = entity.getDescription();
        this.price = entity.getPrice();
        this.category = new CategoryOutputDTO(entity.getCategory());
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

    public CategoryOutputDTO getCategory() {
        return category;
    }

}
