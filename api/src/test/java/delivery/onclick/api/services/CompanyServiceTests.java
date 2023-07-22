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
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import delivery.onclick.api.dtos.CompanyInsertDTO;
import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.dtos.CompanyUpdateDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.factories.CompanyFactory;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.servicesImpl.CompanyServiceImpl;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;

@ExtendWith(SpringExtension.class)
public class CompanyServiceTests {

    @InjectMocks
    private CompanyServiceImpl service;

    @Mock
    private CompanyRepository repository;

    private UUID existingId;
    private UUID nonExistingId;
    private UUID dependentId;
    private Company company;
    private CompanyOutputDTO companyDTO;
    private CompanyInsertDTO companyInsertDTO;
    private CompanyUpdateDTO companyUpdateDTO;
    private List<Company> companies;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45");
        nonExistingId = UUID.fromString("dbccdfc4-181d-48fd-80bc-35f954f8689f");
        // dependentId = UUID.fromString("");

        company = CompanyFactory.company();
        companyDTO = CompanyFactory.companyDTO();
        companies = CompanyFactory.listCompanies();
        companyInsertDTO = CompanyFactory.companyInsertDTO();
        companyUpdateDTO = CompanyFactory.companyUpdateDTO();

        Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(company);
        Mockito.when(repository.findAll()).thenReturn(companies);
        Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(company));

        Mockito.when(repository.getReferenceById(existingId)).thenReturn(company);
        Mockito.when(repository.getReferenceById(nonExistingId)).thenThrow(EntityNotFoundException.class);

        Mockito.doNothing().when(repository).deleteById(existingId);
        Mockito.doThrow(ResourceNotFoundException.class).when(repository).deleteById(nonExistingId);
        Mockito.doThrow(DataIntegrityViolationException.class).when(repository).deleteById(dependentId);

        Mockito.when(repository.existsById(existingId)).thenReturn(true);
        Mockito.when(repository.existsById(nonExistingId)).thenReturn(false);
        Mockito.when(repository.existsById(dependentId)).thenReturn(true);
    }

    @Test
    public void insertShouldReturnCompanyDTOWhenSuccessfullyRegistered() {
        CompanyOutputDTO result = service.insert(companyInsertDTO);

        Assertions.assertNotNull(result.getId());
        Assertions.assertEquals(companyDTO.getName(), result.getName());
        Assertions.assertEquals(companyDTO.getUrl(), result.getUrl());
    }

    @Test
    public void findAllShouldReturnCompanyList() {
        List<CompanyOutputDTO> list = service.findAll();

        Assertions.assertNotNull(list);
        Mockito.verify(repository, Mockito.times(1)).findAll();
    }

    @Test
    public void findByIdShouldReturnCompanyDTOWhenIdExists() {
        CompanyOutputDTO result = service.findById(existingId);

        Assertions.assertNotNull(result);
    }

    @Test
    public void findByIdShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.findById(nonExistingId);
        });
    }

    @Test
    public void updateShouldReturnCompanyDTOWhenIdExists() {
        CompanyOutputDTO result = service.update(existingId, companyUpdateDTO);

        Assertions.assertNotNull(result);
    }

    @Test
    public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.update(nonExistingId, companyUpdateDTO);
        });
    }

    @Test
    public void deleteShouldDoNothingWhenIdExists() {
        Assertions.assertDoesNotThrow(() -> {
            service.delete(existingId);
        });

        Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
    }

    @Test
    public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExist() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.delete(UUID.randomUUID());
        });
    }
}
