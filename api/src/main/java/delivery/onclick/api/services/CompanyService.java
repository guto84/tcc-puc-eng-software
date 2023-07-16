package delivery.onclick.api.services;

import java.util.List;
import java.util.UUID;

import delivery.onclick.api.dtos.CompanyDTO;

public interface CompanyService {

    CompanyDTO insert(CompanyDTO dto);

    List<CompanyDTO> findAll();

    CompanyDTO findById(UUID id);

    CompanyDTO update(UUID id, CompanyDTO dto);

    void delete(UUID id);
}
