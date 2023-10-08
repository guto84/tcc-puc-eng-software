package delivery.onclick.api.repositories;

import delivery.onclick.api.entities.Company;
import delivery.onclick.api.tests.CompanyFactory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@DataJpaTest
public class CompanyRepositoryTests {

    @Autowired
    private CompanyRepository repository;

    private UUID existingId;
    private UUID nonExistingId;
    private Number countTotalCompanies;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45");;
        nonExistingId = UUID.fromString("d1e6f834-0710-49a7-be4d-6608e552515c");;
        countTotalCompanies = 4;
    }

    @Test
    public void saveShouldPersistNewRegistry() {
        Company entity = CompanyFactory.createCompany();

        Company company = repository.save(entity);

        Assertions.assertNotNull(company.getId());
        Assertions.assertEquals(company.getName(), "Company One");
        Assertions.assertEquals(company.getUrl(), "company-one");
    }

    @Test
    public void findAllShouldReturnListOfCompanies() {
        List<Company> entities = repository.findAll();

        Assertions.assertEquals(countTotalCompanies, entities.size());
        Assertions.assertEquals("Lanchonete", entities.get(0).getName());
        Assertions.assertEquals("Pizzaria", entities.get(1).getName());
        Assertions.assertEquals("Restaurante", entities.get(2).getName());
    }

    @Test
    public void findByIdShouldReturnOptionalCompanyWhenIdExists() {
        Optional<Company> entity = repository.findById(existingId);

        Assertions.assertTrue(entity.isPresent());
    }

    @Test
    public void findByIdShouldReturnEmptyOptionalCompanyWhenIdDoesExists() {
        Optional<Company> entity = repository.findById(nonExistingId);

        Assertions.assertTrue(entity.isEmpty());
    }

    @Test
    public void saveShouldUpdateCompanyWhenIdExists() {
        Company entity = repository.getReferenceById(existingId);
        entity.setName("Lanchonete edit");
        entity.setUrl("lanchonete-edit");

        Company company = repository.save(entity);

        Assertions.assertEquals(company.getName(), "Lanchonete edit");
        Assertions.assertEquals(company.getUrl(), "lanchonete-edit");
    }

    @Test
    public void deleteShouldDeleteCompanyWhenIdExists() {
        repository.deleteById(existingId);

        Optional<Company> result = repository.findById(existingId);
        Assertions.assertFalse(result.isPresent());
    }
}
