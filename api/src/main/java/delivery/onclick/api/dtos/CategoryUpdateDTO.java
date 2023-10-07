package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.Category;
import jakarta.validation.constraints.NotBlank;

public class CategoryUpdateDTO {

    @NotBlank(message = "Required field")
    private String name;

    public CategoryUpdateDTO() {
    }

    public CategoryUpdateDTO(Category entity) {
        name = entity.getName();
    }

    public String getName() {
        return name;
    }
}
