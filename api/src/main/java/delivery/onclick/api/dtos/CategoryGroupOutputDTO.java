package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Category;

public class CategoryGroupOutputDTO {

    private UUID id;
    private String name;
    private GroupOutputDTO group;

    public CategoryGroupOutputDTO() {
    }

    public CategoryGroupOutputDTO(Category entity) {
        id = entity.getId();
        name = entity.getName();
        group = new GroupOutputDTO(entity.getGroup());
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public GroupOutputDTO getGroup() {
        return group;
    }

}
