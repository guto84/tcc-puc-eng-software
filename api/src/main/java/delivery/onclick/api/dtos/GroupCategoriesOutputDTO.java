package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Category;
import delivery.onclick.api.entities.Group;

public class GroupCategoriesOutputDTO {

    private UUID id;
    private String name;
    private List<CategoryOutputDTO> categories = new ArrayList<>();

    public GroupCategoriesOutputDTO() {
    }

    public GroupCategoriesOutputDTO(Group entity) {
        id = entity.getId();
        name = entity.getName();
        for (Category x : entity.getCategories()) {
            categories.add(new CategoryOutputDTO(x));
        }
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<CategoryOutputDTO> getCategories() {
        return categories;
    }

}
