package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Role;
import delivery.onclick.api.entities.User;

public class UserRoleOutputDTO {

    private UUID id;
    private String name;
    private String email;
    private List<RoleDTO> roles = new ArrayList<>();

    public UserRoleOutputDTO() {
    }

    public UserRoleOutputDTO(User entity) {
        id = entity.getId();
        name = entity.getName();
        email = entity.getEmail();
        for (Role role : entity.getRoles()) {
            roles.add(new RoleDTO(role));
        }
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

    public List<RoleDTO> getRoles() {
        return roles;
    }
}
