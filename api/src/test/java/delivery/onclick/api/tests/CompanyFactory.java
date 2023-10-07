package delivery.onclick.api.tests;

import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.dtos.CompanyUpdateDTO;
import delivery.onclick.api.entities.Company;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

public class CompanyFactory {

    public static Company createCompany() {
        UUID id = UUID.randomUUID();
        Company entity = new Company(id, "Company One", "company-one");
        return entity;
    }

    public static List<Company> createCompanies() {
        List<Company> list = Arrays.asList(
                new Company(UUID.randomUUID(), "Company One", "company-one"),
                new Company(UUID.randomUUID(), "Company Two", "company-two"),
                new Company(UUID.randomUUID(), "Company Three", "company-three")
        );
        return  list;
    }
}
