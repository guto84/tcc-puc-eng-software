package delivery.onclick.api.services;

import delivery.onclick.api.dtos.CompanyInsertDTO;
import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.dtos.CompanyUpdateDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.servicesImpl.CompanyServiceImpl;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import delivery.onclick.api.tests.CompanyFactory;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@ExtendWith(SpringExtension.class)
public class CompanyServiceTests {

    @InjectMocks
    private CompanyServiceImpl service;

    @Mock
    private CompanyRepository repository;

    private UUID existingId;
    private UUID nonExistingId;
    private Company company;
    private List<Company> companies = new ArrayList<>();

    private Number countTotalCompanies;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45");;
        nonExistingId = UUID.fromString("d1e6f834-0710-49a7-be4d-6608e552515c");;
        countTotalCompanies = 3;
        company = CompanyFactory.createCompany();
        companies = CompanyFactory.createCompanies();

        Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(company);

        Mockito.when(repository.findAll()).thenReturn(companies);

        Mockito.when(repository.findById(this.existingId)).thenReturn(Optional.of(company));
        Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());

        Mockito.when(repository.getReferenceById(existingId)).thenReturn(company);
        Mockito.when(repository.getReferenceById(nonExistingId)).thenThrow(EntityNotFoundException.class);

        Mockito.doNothing().when(repository).deleteById(existingId);
        Mockito.doThrow(ResourceNotFoundException.class).when(repository).deleteById(nonExistingId);
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
        Assertions.assertEquals(this.countTotalCompanies, list.size());
        Assertions.assertEquals(list.get(0).getName(), "Company One");
        Assertions.assertEquals(list.get(1).getName(), "Company Two");
        Assertions.assertEquals(list.get(2).getName(), "Company Three");
        Mockito.verify(repository, Mockito.times(1)).findAll();
    }

    @Test
    public void findByIdShouldReturnCompanyDTOWhenIdExists() {
        CompanyOutputDTO dto = service.findById(this.existingId);

        Assertions.assertNotNull(dto.getId());
        Assertions.assertEquals(dto.getName(), "Company One");
        Assertions.assertEquals(dto.getUrl(), "company-one");
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
    public void deleteShouldDoNothingWhenIdExists() {
        Assertions.assertDoesNotThrow(() -> {
            service.delete(existingId);
        });

        Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
    }

    @Test
    public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExist() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            service.delete(nonExistingId);
        });
    }
}
