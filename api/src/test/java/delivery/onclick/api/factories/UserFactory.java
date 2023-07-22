package delivery.onclick.api.factories;

import java.util.UUID;

import delivery.onclick.api.entities.Role;
import delivery.onclick.api.entities.User;

public class UserFactory {

    public static User createUser() {
        User entity = new User();
        entity.setId(UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45"));
        entity.setName("user");
        entity.setEmail("user@email.com");
        entity.setPassword("123");
        entity.setCompany(CompanyFactory.createCompany());
        for (Role x : RoleFactory.createListRoles()) {
            entity.addRole(x);
        }
        return entity;
    }
}
