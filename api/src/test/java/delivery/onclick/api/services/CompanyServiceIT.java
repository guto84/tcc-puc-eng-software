package delivery.onclick.api.services;

import delivery.onclick.api.dtos.CompanyInsertDTO;
import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.dtos.CompanyUpdateDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import delivery.onclick.api.tests.CompanyFactory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@SpringBootTest
@Transactional
public class CompanyServiceIT {

    @Autowired
    private CompanyService service;

    @Autowired
    private CompanyRepository repository;

    private Company company;

    private UUID existingId;
    private UUID nonExistingId;
    private UUID deleteId;
    private Integer countTotalCompanies;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45");
        nonExistingId = UUID.fromString("d1e6f834-0710-49a7-be4d-6608e552515c");
        deleteId = UUID.fromString("0b6889bd-19f5-4f9a-ad3a-72081652fce6");
        company = CompanyFactory.createCompany();
        countTotalCompanies = 4;
    }

    @Test
    public void insertShouldReturnCompanyDTOWhenInsertDTOIsValid() {
        CompanyInsertDTO insertDTO = new CompanyInsertDTO(company);

        CompanyOutputDTO outputDTO = service.insert(insertDTO);

        Assertions.assertNotNull(outputDTO.getId());
        Assertions.assertEquals(outputDTO.getName(), "Company One");
        Assertions.assertEquals(outputDTO.getUrl(), "company-one");
    }

    @Test
    public void findAllShouldReturnListOfCompanyDTO() {
        List<CompanyOutputDTO> list = service.findAll();

        Assertions.assertNotNull(list);
        Assertions.assertEquals(countTotalCompanies, list.size());
        Assertions.assertEquals(list.get(0).getName(), "Lanchonete");
        Assertions.assertEquals(list.get(1).getName(), "Pizzaria");
        Assertions.assertEquals(list.get(2).getName(), "Restaurante");
    }

    @Test
    public void findByIdShouldReturnCompanyDTOWhenIdExists() {
        CompanyOutputDTO dto = service.findById(existingId);

        Assertions.assertNotNull(dto.getId());
        Assertions.assertEquals(dto.getName(), "Lanchonete");
        Assertions.assertEquals(dto.getUrl(), "lanchonete");
    }

    @Test
    public void findByIdShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.findById(nonExistingId);
        });
    }

    @Test
    public void updateShouldReturnCompanyDTOWhenIdExists() {
        Company update = new Company();
        update.setName("Company edit");
        update.setUrl("company-edit");
        CompanyUpdateDTO updateDTO = new CompanyUpdateDTO(update);

        CompanyOutputDTO result = service.update(existingId, updateDTO);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(result.getName(), "Company edit");
        Assertions.assertEquals(result.getUrl(), "company-edit");
    }

    @Test
    public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        CompanyUpdateDTO updateDTO = new CompanyUpdateDTO(company);
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.update(nonExistingId, updateDTO);
        });
    }

    @Test
    public void deleteShouldDeleteResourceWhenIdExists() {
        service.delete(deleteId);

        Assertions.assertEquals(countTotalCompanies - 1, repository.count());
    }

    @Test
    public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.delete(nonExistingId);
        });
    }
}
