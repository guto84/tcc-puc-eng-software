package delivery.onclick.api.services;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.RoleDTO;
import delivery.onclick.api.servicesImpl.RoleServiceImpl;

@SpringBootTest
@Transactional
public class RoleServiceIT {

    @Autowired
    private RoleServiceImpl service;

    @Test
    public void findAllShouldReturnCompanyList() {
        List<RoleDTO> list = service.findAll();

        Assertions.assertFalse(list.isEmpty());
        Assertions.assertEquals(3, list.size());
    }
}
