package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Configuration;

public class ConfigurationCategoryOutputDTO {

    private UUID id;
    private String name;
    private Integer minimum;
    private Integer maximum;
    private CategoryOutputDTO category;

    public ConfigurationCategoryOutputDTO() {
    }

    public ConfigurationCategoryOutputDTO(Configuration entity) {
        id = entity.getId();
        name = entity.getName();
        minimum = entity.getMinimum();
        maximum = entity.getMaximum();
        category = new CategoryOutputDTO(entity.getCategory());
    }

    public UUID getId() {
        return id;
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
