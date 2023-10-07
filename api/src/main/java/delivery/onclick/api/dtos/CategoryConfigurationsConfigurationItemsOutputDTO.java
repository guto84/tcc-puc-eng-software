package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Category;
import delivery.onclick.api.entities.Configuration;

public class CategoryConfigurationsConfigurationItemsOutputDTO {

    private UUID id;
    private String name;
    private List<ConfigurationConfigurationItemsOutputDTO> configurations = new ArrayList<>();

    public CategoryConfigurationsConfigurationItemsOutputDTO() {
    }

    public CategoryConfigurationsConfigurationItemsOutputDTO(Category entity) {
        id = entity.getId();
        name = entity.getName();
        for (Configuration x : entity.getConfigurations()) {
            configurations.add(new ConfigurationConfigurationItemsOutputDTO(x));
        }
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<ConfigurationConfigurationItemsOutputDTO> getConfigurations() {
        return configurations;
    }
}
