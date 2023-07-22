package delivery.onclick.api.repositories;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import delivery.onclick.api.entities.User;
import delivery.onclick.api.factories.RoleFactory;
import delivery.onclick.api.factories.UserFactory;
import delivery.onclick.api.projections.UserDetailsProjection;

@DataJpaTest
public class UserRepositoryTests {

    @Autowired
    private UserRepository repository;

    private UUID existingId;
    private UUID nonExistingId;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("36577152-c33e-4d56-b4c3-0cca331f7bd4");
        nonExistingId = UUID.fromString("dbccdfc4-181d-48fd-80bc-35f954f8689f");
    }

    @Test
    public void saveShouldPersistUser() {
        User entity = UserFactory.createUser();

        entity = repository.save(entity);

        Assertions.assertNotNull(entity.getId());
        Assertions.assertEquals("user", entity.getName());
        Assertions.assertEquals("companyOne", entity.getCompany().getName());
        Assertions.assertEquals(true, entity.getRoles().contains(RoleFactory.createListRoles().get(0)));
    }

    @Test
    public void findByIdShouldReturnUserProjectionWhenIdExists() {
        List<UserDetailsProjection> entity = repository.searchUserAndRolesById(existingId);

        Assertions.assertEquals("usuario1", entity.get(0).getName());
        Assertions.assertEquals("usuario1@email.com", entity.get(0).getEmail());
    }

    @Test
    public void findByIdShouldReturnEmptyUserWhenIdDoesExists() {
        List<UserDetailsProjection> entity = repository.searchUserAndRolesById(nonExistingId);

        Assertions.assertTrue(entity.isEmpty());
    }

    @Test
    public void updateShouldReturnUserUpdatedWhenIdExists() {
        User entity = repository.getReferenceById(existingId);
        entity.setName("UserUpdated");

        User updated = repository.save(entity);

        Assertions.assertEquals("UserUpdated", updated.getName());
    }

    @Test
    public void deleteShouldDeleteUserWhenIdExists() {
        repository.deleteById(existingId);

        Optional<User> result = repository.findById(existingId);
        Assertions.assertFalse(result.isPresent());
    }
}
