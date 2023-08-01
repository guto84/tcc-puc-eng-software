package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.Category;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CategoryInsertDTO {

    @NotBlank(message = "Required field")
    private String name;

    @NotNull(message = "Required field")
    private GroupOutputDTO group;

    public CategoryInsertDTO() {
    }

    public CategoryInsertDTO(Category entity) {
        name = entity.getName();
        group = new GroupOutputDTO(entity.getGroup());
    }

    public String getName() {
        return name;
    }

    public GroupOutputDTO getGroup() {
        return group;
    }

}
