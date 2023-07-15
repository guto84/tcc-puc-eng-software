package delivery.onclick.api.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import delivery.onclick.api.dtos.CompanyDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.factories.CompanyFactory;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.servicesImpl.CompanyServiceImpl;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;

@ExtendWith(SpringExtension.class)
public class CompanyServiceTests {

    @InjectMocks
    private CompanyServiceImpl service;

    @Mock
    private CompanyRepository repository;

    private UUID existingId;
    private UUID nonExistingId;
    private Company company;
    private CompanyDTO companyDTO;
    private List<Company> companies;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45");
        nonExistingId = UUID.fromString("dbccdfc4-181d-48fd-80bc-35f954f8689f");

        company = CompanyFactory.createCompany();
        companyDTO = CompanyFactory.createCompanyDTO();
        companies = CompanyFactory.createListCompanies();

        Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(company);
        Mockito.when(repository.findAll()).thenReturn(companies);
        Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(company));
    }

    @Test
    public void insertShouldReturnCompanyDTOWhenSuccessfullyRegistered() {
        CompanyDTO result = service.insert(companyDTO);

        Assertions.assertNotNull(result.getId());
        Assertions.assertEquals(companyDTO.getName(), result.getName());
        Assertions.assertEquals(companyDTO.getUrl(), result.getUrl());
    }

    @Test
    public void findAllShouldReturnCompanyList() {
        List<CompanyDTO> list = service.findAll();

        Assertions.assertNotNull(list);
        Mockito.verify(repository, Mockito.times(1)).findAll();
    }

    @Test
    public void findByIdShouldReturnCompanyDTOWhenIdExists() {
        CompanyDTO result = service.findById(existingId);

        Assertions.assertNotNull(result);
    }

    @Test
    public void findByIdShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.findById(nonExistingId);
        });
    }
}
