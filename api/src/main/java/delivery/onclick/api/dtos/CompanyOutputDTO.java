package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Company;

public class CompanyOutputDTO {

    private UUID id;
    private String name;
    private String url;

    public CompanyOutputDTO() {
    }

    public CompanyOutputDTO(Company entity) {
        id = entity.getId();
        name = entity.getName();
        url = entity.getUrl();
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

}
