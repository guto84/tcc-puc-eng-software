package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Role;

public class RoleDTO {

    private UUID id;
    private String authority;

    public RoleDTO() {
    }

    public RoleDTO(UUID id, String authority) {
        this.id = id;
        this.authority = authority;
    }

    public RoleDTO(Role entity) {
        id = entity.getId();
        authority = entity.getAuthority();
    }

    public UUID getId() {
        return id;
    }

    public String getAuthority() {
        return authority;
    }

}
