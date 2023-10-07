package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Company;
import delivery.onclick.api.entities.User;

public class CompanyUsersOutputDTO {

    private UUID id;
    private String name;
    private String url;

    private List<UserOutputDTO> users = new ArrayList<>();

    public CompanyUsersOutputDTO() {
    }

    public CompanyUsersOutputDTO(Company entity) {
        id = entity.getId();
        name = entity.getName();
        url = entity.getUrl();
        for (User x : entity.getUsers()) {
            users.add(new UserOutputDTO(x));
        }
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUrl() {
        return url;
    }

    public List<UserOutputDTO> getUsers() {
        return users;
    }

}
