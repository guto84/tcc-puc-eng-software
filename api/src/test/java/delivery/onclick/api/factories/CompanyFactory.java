package delivery.onclick.api.factories;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.dtos.CompanyInsertDTO;
import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.dtos.CompanyUpdateDTO;
import delivery.onclick.api.entities.Company;

public class CompanyFactory {

    public static List<Company> listCompanies() {
        List<Company> list = new ArrayList<>();
        Company company1 = company();
        Company company2 = new Company(UUID.fromString("e6756246-8bad-4852-9ad7-6350a0152fbf"), "companyTwo",
                "company-two");
        Company company3 = new Company(UUID.fromString("ad7a78ec-0fdb-472b-a1ca-ca58374768d7"), "companyThree",
                "company-three");
        list.add(company1);
        list.add(company2);
        list.add(company3);
        return list;
    }

    public static Company company() {
        return new Company(UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45"), "companyOne", "company-one");
    }

    public static CompanyOutputDTO companyDTO() {
        return new CompanyOutputDTO(company());
    }

    public static List<CompanyOutputDTO> listCompaniesDTO() {
        return listCompanies().stream().map(x -> new CompanyOutputDTO(x)).toList();
    }

    public static CompanyInsertDTO companyInsertDTO() {
        return new CompanyInsertDTO(company());
    }

    public static CompanyUpdateDTO companyUpdateDTO() {
        return new CompanyUpdateDTO(company());
    }
}
