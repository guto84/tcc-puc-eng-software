package delivery.onclick.api.repositories;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import delivery.onclick.api.entities.Company;
import delivery.onclick.api.entities.Group;

public interface GroupRepository extends JpaRepository<Group, UUID> {

	@Query("SELECT t1 FROM Group t1 JOIN FETCH t1.company t2 where company = :company")
	List<Group> findAllByCompany(Company company);

	@Query("SELECT t1 FROM Group t1 "
			+ "LEFT JOIN FETCH t1.categories t2 "
			+ "LEFT JOIN FETCH t2.products t3 "
			+ "JOIN FETCH t1.company t4 "
			+ "WHERE company = :company")
	List<Group> findAllCategoriesProducts(Company company);

	@Query("SELECT t1 FROM Group t1 "
			+ "JOIN FETCH t1.categories t2 "
			+ "JOIN FETCH t1.company t3 "
			+ "WHERE t1.id = :id")
	Optional<Group> findByIdCategories(UUID id);
}
