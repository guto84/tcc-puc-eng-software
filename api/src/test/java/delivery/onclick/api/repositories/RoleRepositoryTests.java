package delivery.onclick.api.repositories;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import delivery.onclick.api.entities.Role;

@DataJpaTest
public class RoleRepositoryTests {

    @Autowired
    private RoleRepository repository;

    @Test
    public void findAllShouldReturnListRole() {
        List<Role> mockList = new ArrayList<>();
        Role role1 = new Role(UUID.fromString("2f4e2361-1bef-4cda-b971-7909199ad324"), "ROLE_ADMIN");
        Role role2 = new Role(UUID.fromString("c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010"), "ROLE_PROVIDER");
        Role role3 = new Role(UUID.fromString("776f5adb-269a-410a-b8a7-ecb83d3ff06b"), "ROLE_USER");

        mockList.add(role1);
        mockList.add(role2);
        mockList.add(role3);

        List<Role> list = repository.findAll();

        Assertions.assertEquals(mockList, list);
    }
}
