package delivery.onclick.api.services;

import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.CompanyDTO;
import delivery.onclick.api.factories.CompanyFactory;
import delivery.onclick.api.servicesImpl.CompanyServiceImpl;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;

@SpringBootTest
@Transactional
public class CompanyServiceIT {

    @Autowired
    private CompanyServiceImpl service;

    private UUID existingId;
    private UUID nonExistingId;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45");
        nonExistingId = UUID.fromString("dbccdfc4-181d-48fd-80bc-35f954f8689f");
    }

    @Test
    public void insertShouldReturnCompanyDTOWhenSuccessfullyRegistered() {
        CompanyDTO dto = CompanyFactory.createCompanyDTO();
        CompanyDTO result = service.insert(dto);

        Assertions.assertNotNull(result.getId());
        Assertions.assertEquals(dto.getName(), result.getName());
        Assertions.assertEquals(dto.getUrl(), result.getUrl());
    }

    @Test
    public void findAllShouldReturnCompanyList() {
        List<CompanyDTO> list = service.findAll();

        Assertions.assertFalse(list.isEmpty());
        Assertions.assertEquals(3, list.size());
    }

    @Test
    public void findByIdShouldReturnCompanyDTOWhenIdExists() {
        CompanyDTO dto = service.findById(existingId);

        Assertions.assertEquals(dto.getName(), "companyOne");
    }

        @Test
    public void findByIdShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.findById(nonExistingId);
        });
    }
}
