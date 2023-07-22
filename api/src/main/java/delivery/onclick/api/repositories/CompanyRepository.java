package delivery.onclick.api.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import delivery.onclick.api.entities.Company;

public interface CompanyRepository extends JpaRepository<Company, UUID> {

    @Query("SELECT t1 FROM Company t1 "
            + "LEFT JOIN FETCH t1.users t2 "
            + "WHERE t1.id = :id")
    Optional<Company> findByIdUsers(UUID id);
}
