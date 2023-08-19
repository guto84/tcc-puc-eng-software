package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Configuration;
import delivery.onclick.api.entities.ConfigurationItem;

public class ConfigurationConfigurationItemsOutputDTO {

    private UUID id;
    private String name;
    private Integer minimum;
    private Integer maximum;
    private List<ConfigurationItemOutputDTO> configurationItems = new ArrayList<>();

    public ConfigurationConfigurationItemsOutputDTO() {
    }

    public ConfigurationConfigurationItemsOutputDTO(Configuration entity) {
        System.out.println(entity);
        id = entity.getId();
        name = entity.getName();
        minimum = entity.getMinimum();
        maximum = entity.getMaximum();
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

    public Integer getMinimum() {
        return minimum;
    }

    public Integer getMaximum() {
        return maximum;
    }

    public List<ConfigurationItemOutputDTO> getConfigurationItems() {
        return configurationItems;
    }

}
