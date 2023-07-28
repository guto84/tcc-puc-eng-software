package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Group;

public class GroupOutputDTO {

    private UUID id;
    private String name;

    public GroupOutputDTO() {
    }

    public GroupOutputDTO(Group entity) {
        id = entity.getId();
        name = entity.getName();
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

}
