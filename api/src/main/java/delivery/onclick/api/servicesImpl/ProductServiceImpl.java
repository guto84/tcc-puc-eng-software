package delivery.onclick.api.servicesImpl;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.ProductCategoryOutputDTO;
import delivery.onclick.api.dtos.ProductInsertDTO;
import delivery.onclick.api.dtos.ProductOutputDTO;
import delivery.onclick.api.dtos.ProductUpdateDTO;
import delivery.onclick.api.entities.Category;
import delivery.onclick.api.entities.Product;
import delivery.onclick.api.repositories.CategoryRepository;
import delivery.onclick.api.repositories.ProductRepository;
import delivery.onclick.api.services.ProductService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional
    public ProductOutputDTO insert(ProductInsertDTO dto) {
        Category category = categoryRepository.getReferenceById(dto.getCategory().getId());
        Product entity = new Product();
        entity.setName(dto.getName());
        entity.setDescription(dto.getDescription());
        entity.setPrice(dto.getPrice());
        entity.setCategory(category);
        entity = repository.save(entity);
        return new ProductOutputDTO(entity);
    }

    @Transactional(readOnly = true)
    public ProductCategoryOutputDTO findById(UUID id) {
        Optional<Product> obj = repository.findById(id);
        Product entity = obj.orElseThrow(() -> new ResourceNotFoundException());
        return new ProductCategoryOutputDTO(entity);
    }

    @Transactional
    public ProductOutputDTO update(UUID id, ProductUpdateDTO dto) {
        try {
            Product entity = repository.getReferenceById(id);
            entity.setName(dto.getName());
            entity.setDescription(dto.getDescription());
            entity.setPrice(dto.getPrice());
            entity = repository.save(entity);
            return new ProductOutputDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public void delete(UUID id) {
        Optional<Product> entity = repository.findById(id);
        entity.orElseThrow(() -> new ResourceNotFoundException());
        repository.deleteById(id);
    }

}
