package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Configuration;
import delivery.onclick.api.entities.ConfigurationItem;

public class ConfigurationConfigurationItemsOutputDTO {

    private UUID id;
    private String name;
    private Integer min;
    private Integer max;
    private List<ConfigurationItemOutputDTO> configurationItems = new ArrayList<>();

    public ConfigurationConfigurationItemsOutputDTO() {
    }

    public ConfigurationConfigurationItemsOutputDTO(Configuration entity) {
        id = entity.getId();
        name = entity.getName();
        min = entity.getMin();
        max = entity.getMin();
        for (ConfigurationItem x : entity.getConfigurationItems()) {
            configurationItems.add(new ConfigurationItemOutputDTO(x));
        }
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

    public List<ConfigurationItemOutputDTO> getConfigurationItems() {
        return configurationItems;
    }

}
