package delivery.onclick.api.services;

import java.util.UUID;

import delivery.onclick.api.dtos.UserInsertDTO;
import delivery.onclick.api.dtos.UserRoleOutputDTO;
import delivery.onclick.api.dtos.UserUpdateDTO;
import delivery.onclick.api.entities.User;

public interface UserService {

    UserInsertDTO insert(UserInsertDTO dto);

    UserRoleOutputDTO findById(UUID id);

    UserUpdateDTO update(UUID id, UserUpdateDTO dto);

    void delete(UUID id);

    User authenticated();
}
