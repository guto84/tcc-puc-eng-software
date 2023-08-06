package delivery.onclick.api.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import delivery.onclick.api.entities.Company;
import delivery.onclick.api.entities.Order;

public interface OrderRepository extends JpaRepository<Order, UUID> {

    @Query(value = "SELECT t1 FROM Order t1 JOIN FETCH t1.company t2 WHERE company = :company", countQuery = "SELECT count(*) FROM Order t1 JOIN t1.company t2 WHERE company = :company")
    Page<Order> findByCompanyWithPagination(Company company, Pageable pageable);

    @Query("SELECT t1 FROM Order t1 "
            + "JOIN FETCH t1.company t2 "
            + "JOIN FETCH t1.orderItems t3 "
            + "JOIN FETCH t3.product t4 "
            + "JOIN FETCH t4.category t5 "
            + "JOIN FETCH t5.group t6 "
            + "JOIN FETCH t3.orderConfigurations t7 "
            + "WHERE t1.id = :id")
    Optional<Order> findById(UUID id);
}
