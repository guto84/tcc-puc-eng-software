package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Role;
import delivery.onclick.api.entities.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class UserInsertDTO {

    private UUID id;

    @NotBlank(message = "Required field")
    private String name;

    @NotBlank(message = "Required field")
    @Email(message = "Should be an email")
    private String email;

    @NotBlank(message = "Required field")
    private String password;

    @NotNull(message = "Required field")
    private CompanyOutputDTO company;

    @NotEmpty(message = "Should be at least role")
    private List<RoleDTO> roles = new ArrayList<>();

    public UserInsertDTO() {
    }

    public UserInsertDTO(User entity) {
        id = entity.getId();
        name = entity.getName();
        email = entity.getEmail();
        password = entity.getPassword();
        company = new CompanyOutputDTO(entity.getCompany());
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

    public CompanyOutputDTO getCompany() {
        return company;
    }

}
