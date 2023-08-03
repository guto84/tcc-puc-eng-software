package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Configuration;

public class ConfigurationCategoryOutputDTO {

    private UUID id;
    private String name;
    private Integer min;
    private Integer max;
    private CategoryOutputDTO category;

    public ConfigurationCategoryOutputDTO() {
    }

    public ConfigurationCategoryOutputDTO(Configuration entity) {
        id = entity.getId();
        name = entity.getName();
        min = entity.getMin();
        max = entity.getMax();
        category = new CategoryOutputDTO(entity.getCategory());
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getMin() {
        return min;
    }

    public Integer getMax() {
        return max;
    }

    public CategoryOutputDTO getCategory() {
        return category;
    }

}
