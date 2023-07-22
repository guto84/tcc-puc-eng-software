package delivery.onclick.api.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import delivery.onclick.api.entities.User;
import delivery.onclick.api.projections.UserDetailsProjection;

public interface UserRepository extends JpaRepository<User, UUID> {

	@Query(nativeQuery = true, value = """
			SELECT
				tb_user.id,
				tb_user.name,
				tb_user.email,
				tb_user.password,
				tb_company.id AS companyId,
				tb_role.id AS roleId,
				tb_role.authority
			FROM tb_user
			INNER JOIN tb_company ON tb_company.id = tb_user.company_id
			INNER JOIN tb_user_role ON tb_user.id = tb_user_role.user_id
			INNER JOIN tb_role ON tb_role.id = tb_user_role.role_id
			WHERE tb_user.id = :id
			          """)
	List<UserDetailsProjection> searchUserAndRolesById(@Param("id") UUID id);
}
