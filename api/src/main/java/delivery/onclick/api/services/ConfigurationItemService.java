package delivery.onclick.api.services;

import java.util.UUID;

import delivery.onclick.api.dtos.ConfigurationItemConfigurationOutputDTO;
import delivery.onclick.api.dtos.ConfigurationItemInsertDTO;
import delivery.onclick.api.dtos.ConfigurationItemOutputDTO;
import delivery.onclick.api.dtos.ConfigurationItemUpdateDTO;

public interface ConfigurationItemService {

    ConfigurationItemOutputDTO insert(ConfigurationItemInsertDTO input);

    ConfigurationItemConfigurationOutputDTO findById(UUID id);

    ConfigurationItemOutputDTO update(UUID id, ConfigurationItemUpdateDTO input);

    void delete(UUID id);
}
