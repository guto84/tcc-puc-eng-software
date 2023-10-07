package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Category;
import delivery.onclick.api.entities.Configuration;

public class CategoryConfigurationsOutputDTO {

    private UUID id;
    private String name;
    private List<ConfigurationOutputDTO> configurations = new ArrayList<>();

    public CategoryConfigurationsOutputDTO() {
    }

    public CategoryConfigurationsOutputDTO(Category entity) {
        id = entity.getId();
        name = entity.getName();
        for (Configuration x : entity.getConfigurations()) {
            configurations.add(new ConfigurationOutputDTO(x));
        }
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<ConfigurationOutputDTO> getConfigurations() {
        return configurations;
    }

}
