package delivery.onclick.api.services;

import java.util.UUID;

import delivery.onclick.api.dtos.CategoryConfigurationsConfigurationItemsOutputDTO;
import delivery.onclick.api.dtos.CategoryConfigurationsOutputDTO;
import delivery.onclick.api.dtos.CategoryGroupOutputDTO;
import delivery.onclick.api.dtos.CategoryInsertDTO;
import delivery.onclick.api.dtos.CategoryOutputDTO;
import delivery.onclick.api.dtos.CategoryProductsOutputDTO;
import delivery.onclick.api.dtos.CategoryUpdateDTO;

public interface CategoryService {

    CategoryOutputDTO insert(CategoryInsertDTO dto);

    CategoryGroupOutputDTO findById(UUID id);

    CategoryOutputDTO update(UUID id, CategoryUpdateDTO dto);

    void delete(UUID id);

    CategoryProductsOutputDTO findByIdProducts(UUID id);

    CategoryConfigurationsOutputDTO findByIdConfigurations(UUID id);

    CategoryConfigurationsConfigurationItemsOutputDTO findByIdConfigurationsConfigurationItems(UUID id);
    
}
