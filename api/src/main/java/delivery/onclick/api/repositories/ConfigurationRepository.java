package delivery.onclick.api.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import delivery.onclick.api.entities.Configuration;

public interface ConfigurationRepository extends JpaRepository<Configuration, UUID> {

    @Query("SELECT t1 FROM Configuration t1 "
            + "JOIN FETCH t1.configurationItems t2 "
            + "JOIN FETCH t1.category t3 "
            + "JOIN FETCH t3.group t4 "
            + "JOIN FETCH t4.company t5 "
            + "WHERE t1.id = :id")
    Optional<Configuration> findByIdConfigurationItems(UUID id);
}
