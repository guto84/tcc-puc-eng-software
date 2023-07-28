package delivery.onclick.api.dtos;

import delivery.onclick.api.entities.Group;
import jakarta.validation.constraints.NotBlank;

public class GroupInsertDTO {

    @NotBlank(message = "Required field")
    private String name;

    public GroupInsertDTO() {
    }

    public GroupInsertDTO(Group entity) {
        name = entity.getName();
    }

    public String getName() {
        return name;
    }

}
