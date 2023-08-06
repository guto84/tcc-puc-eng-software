package delivery.onclick.api.services;

import java.util.UUID;

import delivery.onclick.api.dtos.ProductCategoryConfigurationsConfigurationItemsOutputDTO;
import delivery.onclick.api.dtos.ProductCategoryOutputDTO;
import delivery.onclick.api.dtos.ProductInsertDTO;
import delivery.onclick.api.dtos.ProductOutputDTO;
import delivery.onclick.api.dtos.ProductUpdateDTO;

public interface ProductService {

    ProductOutputDTO insert(ProductInsertDTO dto);

    ProductCategoryOutputDTO findById(UUID id);

    ProductOutputDTO update(UUID id, ProductUpdateDTO dto);

    void delete(UUID id);

    ProductCategoryConfigurationsConfigurationItemsOutputDTO findByIdConfigurations(UUID id);
}
