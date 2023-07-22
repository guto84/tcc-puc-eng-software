package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Role;
import delivery.onclick.api.entities.User;

public class UserInsertDTO {

    private UUID id;
    private String name;
    private String email;
    private String password;
    private CompanyDTO company;
    private List<RoleDTO> roles = new ArrayList<>();

    public UserInsertDTO() {
    }

    public UserInsertDTO(User entity) {
        id = entity.getId();
        name = entity.getName();
        email = entity.getEmail();
        password = entity.getPassword();
        company = new CompanyDTO(entity.getCompany());
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

    public String getPassword() {
        return password;
    }

    public List<RoleDTO> getRoles() {
        return roles;
    }

    public CompanyDTO getCompany() {
        return company;
    }

}
