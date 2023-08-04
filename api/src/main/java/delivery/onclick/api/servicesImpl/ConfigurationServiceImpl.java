package delivery.onclick.api.servicesImpl;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.ConfigurationCategoryOutputDTO;
import delivery.onclick.api.dtos.ConfigurationConfigurationItemsOutputDTO;
import delivery.onclick.api.dtos.ConfigurationInsertDTO;
import delivery.onclick.api.dtos.ConfigurationOutputDTO;
import delivery.onclick.api.dtos.ConfigurationUpdateDTO;
import delivery.onclick.api.entities.Category;
import delivery.onclick.api.entities.Configuration;
import delivery.onclick.api.repositories.CategoryRepository;
import delivery.onclick.api.repositories.ConfigurationRepository;
import delivery.onclick.api.services.ConfigurationService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class ConfigurationServiceImpl implements ConfigurationService {

    @Autowired
    private ConfigurationRepository repository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional
    public ConfigurationOutputDTO insert(ConfigurationInsertDTO dto) {
        Category category = categoryRepository.getReferenceById(dto.getCategory().getId());
        Configuration entity = new Configuration();
        entity.setName(dto.getName());
        entity.setMax(dto.getMax());
        entity.setMin(dto.getMin());
        entity.setCategory(category);
        entity = repository.save(entity);
        return new ConfigurationOutputDTO(entity);
    }

    @Transactional(readOnly = true)
    public ConfigurationCategoryOutputDTO findById(UUID id) {
        Optional<Configuration> obj = repository.findById(id);
        Configuration entity = obj.orElseThrow(() -> new ResourceNotFoundException());
        return new ConfigurationCategoryOutputDTO(entity);
    }

    @Transactional
    public ConfigurationOutputDTO update(UUID id, ConfigurationUpdateDTO dto) {
        try {
            Configuration entity = repository.getReferenceById(id);
            entity.setName(dto.getName());
            entity.setMax(dto.getMax());
            entity.setMin(dto.getMin());
            entity = repository.save(entity);
            return new ConfigurationOutputDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public void delete(UUID id) {
        Optional<Configuration> entity = repository.findById(id);
        entity.orElseThrow(() -> new ResourceNotFoundException());
        repository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public ConfigurationConfigurationItemsOutputDTO findByIdConfigurationItems(UUID id) {
        Optional<Configuration> obj = repository.findByIdConfigurationItems(id);
        Configuration entity = obj.orElseThrow(() -> new ResourceNotFoundException());
        return new ConfigurationConfigurationItemsOutputDTO(entity);
    }

}
