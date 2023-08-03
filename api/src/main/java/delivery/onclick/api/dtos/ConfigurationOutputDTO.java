package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Configuration;

public class ConfigurationOutputDTO {

    private UUID id;
    private String name;
    private Integer min;
    private Integer max;

    public ConfigurationOutputDTO() {
    }

    public ConfigurationOutputDTO(Configuration entity) {
        id = entity.getId();
        name = entity.getName();
        min = entity.getMin();
        max = entity.getMax();
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

}
