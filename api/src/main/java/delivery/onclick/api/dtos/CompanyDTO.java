package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Company;

public class CompanyDTO {

    private UUID id;
    private String name;
    private String url;

    public CompanyDTO() {
    }

    public CompanyDTO(UUID id, String name, String url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }

    public CompanyDTO(Company entity) {
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
