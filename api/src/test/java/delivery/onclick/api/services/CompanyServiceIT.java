package delivery.onclick.api.services;

import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.CompanyInsertDTO;
import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.dtos.CompanyUpdateDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.factories.CompanyFactory;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.servicesImpl.CompanyServiceImpl;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;

@SpringBootTest
@Transactional
public class CompanyServiceIT {

    @Autowired
    private CompanyServiceImpl service;

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
    public void insertShouldReturnCompanyDTOWhenSuccessfullyRegistered() {
        CompanyInsertDTO dto = CompanyFactory.companyInsertDTO();
        CompanyOutputDTO result = service.insert(dto);

        Assertions.assertNotNull(result.getId());
        Assertions.assertEquals(dto.getName(), result.getName());
        Assertions.assertEquals(dto.getUrl(), result.getUrl());
    }

    @Test
    public void findAllShouldReturnCompanyList() {
        List<CompanyOutputDTO> list = service.findAll();

        Assertions.assertFalse(list.isEmpty());
        Assertions.assertEquals(3, list.size());
    }

    @Test
    public void findByIdShouldReturnCompanyDTOWhenIdExists() {
        CompanyOutputDTO dto = service.findById(existingId);

        Assertions.assertEquals(dto.getName(), "companyOne");
    }

    @Test
    public void findByIdShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.findById(nonExistingId);
        });
    }

    @Test
    public void updateShouldReturnCompanyDTOWhenIdExists() {
        Company entity = CompanyFactory.company();
        entity.setName("Company Edited");
        CompanyUpdateDTO dto = new CompanyUpdateDTO(entity);

        CompanyOutputDTO result = service.update(existingId, dto);

        Assertions.assertNotNull(result.getId());
        Assertions.assertEquals(dto.getName(), result.getName());
        Assertions.assertEquals(dto.getUrl(), result.getUrl());
    }

    @Test
    public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        CompanyUpdateDTO dto = CompanyFactory.companyUpdateDTO();
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.update(nonExistingId, dto);
        });
    }

    @Test
    public void deleteShouldDeleteResourceWhenIdExists() {
        service.delete(existingId);

        Assertions.assertEquals(2, repository.count());
    }

    @Test
    public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.delete(nonExistingId);
        });
    }
}
