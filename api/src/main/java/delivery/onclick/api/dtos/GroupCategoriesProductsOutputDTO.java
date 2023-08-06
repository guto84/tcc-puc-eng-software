package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Category;
import delivery.onclick.api.entities.Group;

public class GroupCategoriesProductsOutputDTO {

    private UUID id;
    private String name;
    private List<CategoryProductsOutputDTO> categories = new ArrayList<>();

    public GroupCategoriesProductsOutputDTO() {
    }

    public GroupCategoriesProductsOutputDTO(Group entity) {
        id = entity.getId();
        name = entity.getName();
        for (Category x : entity.getCategories()) {
            categories.add(new CategoryProductsOutputDTO(x));
        }
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<CategoryProductsOutputDTO> getCategories() {
        return categories;
    }

}
