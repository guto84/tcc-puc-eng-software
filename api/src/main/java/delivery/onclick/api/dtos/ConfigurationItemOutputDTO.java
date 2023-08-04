package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.ConfigurationItem;

public class ConfigurationItemOutputDTO {

    private UUID id;
    private String name;
    private String description;
    private Double price;

    public ConfigurationItemOutputDTO() {
    }

    public ConfigurationItemOutputDTO(ConfigurationItem entity) {
        id = entity.getId();
        name = entity.getName();
        description = entity.getDescription();
        price = entity.getPrice();
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

}
