package delivery.onclick.api.services;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import delivery.onclick.api.dtos.RoleDTO;
import delivery.onclick.api.entities.Role;
import delivery.onclick.api.factories.RoleFactory;
import delivery.onclick.api.repositories.RoleRepository;
import delivery.onclick.api.servicesImpl.RoleServiceImpl;

@ExtendWith(SpringExtension.class)
public class RoleServiceTests {

    @InjectMocks
    private RoleServiceImpl service;

    @Mock
    private RoleRepository repository;

    private List<Role> roles;

    @BeforeEach
    void setUp() throws Exception {
        roles = RoleFactory.createListRoles();

        Mockito.when(repository.findAll()).thenReturn(roles);
    }

    @Test
    public void findAllShouldReturnCompanyList() {
        List<RoleDTO> list = service.findAll();

        Assertions.assertNotNull(list);
        Mockito.verify(repository, Mockito.times(1)).findAll();
    }
}
