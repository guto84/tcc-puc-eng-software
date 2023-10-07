package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.ConfigurationItem;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;

public class ConfigurationItemUpdateDTO {

    @NotBlank(message = "Required field")
    private String name;

    @DecimalMin("0.01")
    @Digits(integer = 3, fraction = 2)
    private Double price;

    private String description;

    public ConfigurationItemUpdateDTO() {
    }

    public ConfigurationItemUpdateDTO(ConfigurationItem entity) {
        name = entity.getName();
        price = entity.getPrice();
        description = entity.getDescription();
    }

    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

}
