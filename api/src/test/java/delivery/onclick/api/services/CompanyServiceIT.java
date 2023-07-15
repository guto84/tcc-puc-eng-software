package delivery.onclick.api.services;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.CompanyDTO;
import delivery.onclick.api.factories.CompanyFactory;
import delivery.onclick.api.servicesImpl.CompanyServiceImpl;

@SpringBootTest
@Transactional
public class CompanyServiceIT {

    @Autowired
    private CompanyServiceImpl service;

    @Test
    public void insertShouldReturnCompanyDTOWhenSuccessfullyRegistered() {
        CompanyDTO dto = CompanyFactory.createCompanyDTO();
        CompanyDTO result = service.insert(dto);

        Assertions.assertNotNull(result.getId());
        Assertions.assertEquals(dto.getName(), result.getName());
        Assertions.assertEquals(dto.getUrl(), result.getUrl());
    }
}
