package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.User;

public class UserOutputDTO {

    private UUID id;
    private String name;
    private String email;

    public UserOutputDTO() {
    }

    public UserOutputDTO(User entity) {
        id = entity.getId();
        name = entity.getName();
        email = entity.getEmail();
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
