package delivery.onclick.api.repositories;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import delivery.onclick.api.entities.Role;
import delivery.onclick.api.factories.RoleFactory;

@DataJpaTest
public class RoleRepositoryTests {

    @Autowired
    private RoleRepository repository;

    @Test
    public void findAllShouldReturnListRole() {
        List<Role> mockList = RoleFactory.listRoles();

        List<Role> list = repository.findAll();

        Assertions.assertEquals(mockList, list);
    }
}
