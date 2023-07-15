package delivery.onclick.api.services;

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

@ExtendWith(SpringExtension.class)
public class CompanyServiceTests {

    @InjectMocks
    private CompanyServiceImpl service;

    @Mock
    private CompanyRepository repository;

    private Company company;
    private CompanyDTO companyDTO;

    @BeforeEach
    void setUp() throws Exception {
        company = CompanyFactory.createCompany();
        companyDTO = CompanyFactory.createCompanyDTO();

        Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(company);
    }

    @Test
    public void insertShouldReturnCompanyDTOWhenSuccessfullyRegistered() {
        CompanyDTO result = service.insert(companyDTO);

        Assertions.assertNotNull(result.getId());
        Assertions.assertEquals(companyDTO.getName(), result.getName());
        Assertions.assertEquals(companyDTO.getUrl(), result.getUrl());
    }
}
