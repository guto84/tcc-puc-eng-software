package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Configuration;

public class ConfigurationOutputDTO {

    private UUID id;
    private String name;
    private Integer minimum;
    private Integer maximum;

    public ConfigurationOutputDTO() {
    }

    public ConfigurationOutputDTO(Configuration entity) {
        id = entity.getId();
        name = entity.getName();
        minimum = entity.getMinimum();
        maximum = entity.getMaximum();
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

}
