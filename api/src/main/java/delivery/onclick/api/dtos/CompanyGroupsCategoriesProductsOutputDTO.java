package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Company;
import delivery.onclick.api.entities.Group;

public class CompanyGroupsCategoriesProductsOutputDTO {

    private UUID id;
    private String name;
    private String url;
    private List<GroupCategoriesProductsOutputDTO> groups = new ArrayList<>();

    public CompanyGroupsCategoriesProductsOutputDTO() {
    }

    public CompanyGroupsCategoriesProductsOutputDTO(Company entity) {
        id = entity.getId();
        name = entity.getName();
        url = entity.getUrl();
        for (Group x : entity.getGroups()) {
            groups.add(new GroupCategoriesProductsOutputDTO(x));
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

    public List<GroupCategoriesProductsOutputDTO> getGroups() {
        return groups;
    }

}
