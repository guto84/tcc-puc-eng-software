package delivery.onclick.api.services;

import java.util.UUID;

import delivery.onclick.api.dtos.ConfigurationCategoryOutputDTO;
import delivery.onclick.api.dtos.ConfigurationConfigurationItemsOutputDTO;
import delivery.onclick.api.dtos.ConfigurationInsertDTO;
import delivery.onclick.api.dtos.ConfigurationOutputDTO;
import delivery.onclick.api.dtos.ConfigurationUpdateDTO;

public interface ConfigurationService {

    ConfigurationOutputDTO insert(ConfigurationInsertDTO dto);

    ConfigurationCategoryOutputDTO findById(UUID id);

    ConfigurationOutputDTO update(UUID id, ConfigurationUpdateDTO dto);

    void delete(UUID id);

    ConfigurationConfigurationItemsOutputDTO findByIdConfigurationItems(UUID id);
}
