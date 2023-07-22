package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Company;

public class CompanyInsertDTO {

    private UUID id;
    private String name;
    private String url;

    public CompanyInsertDTO() {
    }

    public CompanyInsertDTO(Company entity) {
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
