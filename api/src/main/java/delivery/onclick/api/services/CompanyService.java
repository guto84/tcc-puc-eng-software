package delivery.onclick.api.services;

import java.util.List;
import java.util.UUID;

import delivery.onclick.api.dtos.CompanyGroupsCategoriesProductsOutputDTO;
import delivery.onclick.api.dtos.CompanyInsertDTO;
import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.dtos.CompanyUpdateDTO;
import delivery.onclick.api.dtos.CompanyUsersOutputDTO;

public interface CompanyService {

    CompanyOutputDTO insert(CompanyInsertDTO dto);

    List<CompanyOutputDTO> findAll();

    CompanyOutputDTO findById(UUID id);

    CompanyOutputDTO update(UUID id, CompanyUpdateDTO dto);

    void delete(UUID id);

    CompanyUsersOutputDTO findByIdUsers(UUID id);

    CompanyGroupsCategoriesProductsOutputDTO findByUrl(String url);
}
