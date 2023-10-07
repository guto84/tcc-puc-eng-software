package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.Group;
import jakarta.validation.constraints.NotBlank;

public class GroupUpdateDTO {
    
    @NotBlank(message = "Required field")
    private String name;

    public GroupUpdateDTO() {
    }

    public GroupUpdateDTO(Group entity) {
        name = entity.getName();
    }

    public String getName() {
        return name;
    }
}
