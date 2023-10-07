package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Group;

public class GroupCompanyOutputDTO {

    private UUID id;
    private String name;
    private CompanyOutputDTO company;

    public GroupCompanyOutputDTO() {
    }

    public GroupCompanyOutputDTO(Group entity) {
        id = entity.getId();
        name = entity.getName();
        company = new CompanyOutputDTO(entity.getCompany());
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public CompanyOutputDTO getCompany() {
        return company;
    }

}
