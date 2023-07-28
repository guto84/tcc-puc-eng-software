package delivery.onclick.api.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import delivery.onclick.api.entities.Company;
import delivery.onclick.api.entities.Group;

public interface GroupRepository extends JpaRepository<Group, UUID> {

	@Query("SELECT t1 FROM Group t1 JOIN FETCH t1.company t2 where company = :company")
	List<Group> findAllByCompany(Company company);
}
