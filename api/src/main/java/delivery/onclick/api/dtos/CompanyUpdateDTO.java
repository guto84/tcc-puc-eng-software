package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Company;
import jakarta.validation.constraints.NotBlank;

public class CompanyUpdateDTO {

    private UUID id;

    @NotBlank(message = "Required field")
    private String name;

    @NotBlank(message = "Required field")
    private String url;

    public CompanyUpdateDTO() {
    }

    public CompanyUpdateDTO(Company entity) {
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
