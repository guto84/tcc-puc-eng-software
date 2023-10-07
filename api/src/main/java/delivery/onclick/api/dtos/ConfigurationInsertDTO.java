package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.Configuration;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class ConfigurationInsertDTO {

    @NotBlank(message = "Required field")
    private String name;

    @NotNull(message = "Required field")
    @Min(value = 0, message = "The value must be greater than or equal to 0")
    @Max(value = 10, message = "The value must be less than or equal to 10")
    private Integer minimum;
    
    @NotNull(message = "Required field")
    @Min(value = 0, message = "The value must be greater than or equal to 0")
    @Max(value = 10, message = "The value must be less than or equal to 10")
    private Integer maximum;

    @NotNull(message = "Required field")
    private CategoryOutputDTO category;

    public ConfigurationInsertDTO() {
    }

    public ConfigurationInsertDTO(Configuration entity) {
        name = entity.getName();
        minimum = entity.getMinimum();
        maximum = entity.getMaximum();
        category = new CategoryOutputDTO(entity.getCategory());
    }

    public String getName() {
        return name;
    }

    public Integer getMinimum() {
        return minimum;
    }

    public Integer getMaximum() {
        return maximum;
    }

    public CategoryOutputDTO getCategory() {
        return category;
    }

}
