package delivery.onclick.api.services;

import java.util.List;
import java.util.UUID;

import delivery.onclick.api.dtos.GroupCategoriesOutputDTO;
import delivery.onclick.api.dtos.GroupCompanyOutputDTO;
import delivery.onclick.api.dtos.GroupInsertDTO;
import delivery.onclick.api.dtos.GroupOutputDTO;
import delivery.onclick.api.dtos.GroupUpdateDTO;

public interface GroupService {

    GroupOutputDTO insert(GroupInsertDTO dto);

    List<GroupOutputDTO> findAll();

    GroupCompanyOutputDTO findById(UUID id);

    GroupOutputDTO update(UUID id, GroupUpdateDTO dto);

    void delete(UUID id);

    GroupCategoriesOutputDTO findByIdCategories(UUID id);
}
