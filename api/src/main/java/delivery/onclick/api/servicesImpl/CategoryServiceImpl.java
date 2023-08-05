package delivery.onclick.api.servicesImpl;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.CategoryConfigurationsConfigurationItemsOutputDTO;
import delivery.onclick.api.dtos.CategoryConfigurationsOutputDTO;
import delivery.onclick.api.dtos.CategoryGroupOutputDTO;
import delivery.onclick.api.dtos.CategoryInsertDTO;
import delivery.onclick.api.dtos.CategoryOutputDTO;
import delivery.onclick.api.dtos.CategoryProductsOutputDTO;
import delivery.onclick.api.dtos.CategoryUpdateDTO;
import delivery.onclick.api.entities.Category;
import delivery.onclick.api.entities.Group;
import delivery.onclick.api.repositories.CategoryRepository;
import delivery.onclick.api.repositories.GroupRepository;
import delivery.onclick.api.services.CategoryService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository repository;

    @Autowired
    private GroupRepository groupRepository;

    @Transactional
    public CategoryOutputDTO insert(CategoryInsertDTO dto) {
        Group group = groupRepository.getReferenceById(dto.getGroup().getId());
        Category entity = new Category();
        entity.setName(dto.getName());
        entity.setGroup(group);
        entity = repository.save(entity);
        return new CategoryOutputDTO(entity);
    }

    @Transactional(readOnly = true)
    public CategoryGroupOutputDTO findById(UUID id) {
        Optional<Category> obj = repository.findById(id);
        Category entity = obj.orElseThrow(() -> new ResourceNotFoundException());
        return new CategoryGroupOutputDTO(entity);
    }

    @Transactional
    public CategoryOutputDTO update(UUID id, CategoryUpdateDTO dto) {
        try {
            Category entity = repository.getReferenceById(id);
            entity.setName(dto.getName());
            entity = repository.save(entity);
            return new CategoryOutputDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public void delete(UUID id) {
        Optional<Category> entity = repository.findById(id);
        entity.orElseThrow(() -> new ResourceNotFoundException());
        repository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public CategoryProductsOutputDTO findByIdProducts(UUID id) {
        Optional<Category> obj = repository.findByIdProducts(id);
        Category entity = obj.orElseThrow(() -> new ResourceNotFoundException());
        return new CategoryProductsOutputDTO(entity);
    }

    @Transactional(readOnly = true)
    public CategoryConfigurationsOutputDTO findByIdConfigurations(UUID id) {
        Optional<Category> obj = repository.findByIdConfigurations(id);
        Category entity = obj.orElseThrow(() -> new ResourceNotFoundException());
        return new CategoryConfigurationsOutputDTO(entity);
    }

    @Override
    public CategoryConfigurationsConfigurationItemsOutputDTO findByIdConfigurationsConfigurationItems(UUID id) {
        Optional<Category> obj = repository.findByIdConfigurationsConfigurationItems(id);
        Category entity = obj.orElseThrow(() -> new ResourceNotFoundException());
        return new CategoryConfigurationsConfigurationItemsOutputDTO(entity);
    }
}
