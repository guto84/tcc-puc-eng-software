package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.ConfigurationItem;

public class ConfigurationItemConfigurationOutputDTO {

    private UUID id;
    private String name;
    private String description;
    private Double price;
    private ConfigurationOutputDTO configuration;

    public ConfigurationItemConfigurationOutputDTO() {
    }

    public ConfigurationItemConfigurationOutputDTO(ConfigurationItem entity) {
        id = entity.getId();
        name = entity.getName();
        description = entity.getDescription();
        price = entity.getPrice();
        configuration = new ConfigurationOutputDTO(entity.getConfiguration());
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Double getPrice() {
        return price;
    }

    public ConfigurationOutputDTO getConfiguration() {
        return configuration;
    }

}
