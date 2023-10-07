package delivery.onclick.api.servicesImpl;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.ConfigurationItemConfigurationOutputDTO;
import delivery.onclick.api.dtos.ConfigurationItemInsertDTO;
import delivery.onclick.api.dtos.ConfigurationItemOutputDTO;
import delivery.onclick.api.dtos.ConfigurationItemUpdateDTO;
import delivery.onclick.api.entities.Configuration;
import delivery.onclick.api.entities.ConfigurationItem;
import delivery.onclick.api.repositories.ConfigurationItemRepository;
import delivery.onclick.api.repositories.ConfigurationRepository;
import delivery.onclick.api.services.ConfigurationItemService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class ConfigurationItemServiceImpl implements ConfigurationItemService {

    @Autowired
    private ConfigurationItemRepository repository;

    @Autowired
    private ConfigurationRepository configurationRepository;

    @Transactional
    public ConfigurationItemOutputDTO insert(ConfigurationItemInsertDTO dto) {
        Configuration configuration = configurationRepository.getReferenceById(dto.getConfiguration().getId());
        ConfigurationItem entity = new ConfigurationItem();
        entity.setName(dto.getName());
        entity.setPrice(dto.getPrice());
        entity.setDescription(dto.getDescription());
        entity.setConfiguration(configuration);
        entity = repository.save(entity);
        return new ConfigurationItemOutputDTO(entity);
    }

    @Transactional(readOnly = true)
    public ConfigurationItemConfigurationOutputDTO findById(UUID id) {
        Optional<ConfigurationItem> obj = repository.findById(id);
        ConfigurationItem entity = obj.orElseThrow(() -> new ResourceNotFoundException());
        return new ConfigurationItemConfigurationOutputDTO(entity);
    }

    @Transactional
    public ConfigurationItemOutputDTO update(UUID id, ConfigurationItemUpdateDTO dto) {
        try {
            ConfigurationItem entity = repository.getReferenceById(id);
            entity.setName(dto.getName());
            entity.setPrice(dto.getPrice());
            entity.setDescription(dto.getDescription());
            entity = repository.save(entity);
            return new ConfigurationItemOutputDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public void delete(UUID id) {
        Optional<ConfigurationItem> entity = repository.findById(id);
        entity.orElseThrow(() -> new ResourceNotFoundException());
        repository.deleteById(id);
    }

}
