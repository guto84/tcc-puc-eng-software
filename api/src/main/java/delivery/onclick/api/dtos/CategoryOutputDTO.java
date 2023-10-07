package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Category;

public class CategoryOutputDTO {

    private UUID id;
    private String name;

    public CategoryOutputDTO() {
    }

    public CategoryOutputDTO(Category entity) {
        id = entity.getId();
        name = entity.getName();
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

}
