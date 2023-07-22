package delivery.onclick.api.repositories;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import delivery.onclick.api.entities.Company;
import delivery.onclick.api.factories.CompanyFactory;

@DataJpaTest
public class CompanyRepositoryTests {

    @Autowired
    private CompanyRepository repository;

    private UUID existingId;
    private UUID nonExistingId;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45");
        nonExistingId = UUID.fromString("dbccdfc4-181d-48fd-80bc-35f954f8689f");
    }

    @Test
    public void saveShouldPersistCompany() {
        Company entity = new Company();
        entity.setName("company");
        entity.setUrl("company");

        entity = repository.save(entity);

        Assertions.assertNotNull(entity.getId());
        Assertions.assertEquals("company", entity.getName());
        Assertions.assertEquals("company", entity.getUrl());
    }

    @Test
    public void findAllShouldReturnListCompany() {
        List<Company> mockList = CompanyFactory.listCompanies();

        List<Company> list = repository.findAll();

        Assertions.assertEquals(mockList, list);
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
    public void updateShouldReturnCompanyUpdatedWhenIdExists() {
        Company entity = repository.getReferenceById(existingId);
        entity.setName("CompanyUpdated");

        Company updated = repository.save(entity);

        Assertions.assertEquals("CompanyUpdated", updated.getName());
    }

    @Test
    public void deleteShouldDeleteCompanyWhenIdExists() {

        repository.deleteById(existingId);

        Optional<Company> result = repository.findById(existingId);
        Assertions.assertFalse(result.isPresent());
    }
}
