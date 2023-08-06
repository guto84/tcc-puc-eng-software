package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Product;

public class ProductCategoryConfigurationsConfigurationItemsOutputDTO {

    private UUID id;
    private String name;
    private String description;
    private Double price;
    private CategoryConfigurationsConfigurationItemsOutputDTO category;

    public ProductCategoryConfigurationsConfigurationItemsOutputDTO() {
    }

    public ProductCategoryConfigurationsConfigurationItemsOutputDTO(Product entity) {
        id = entity.getId();
        name = entity.getName();
        description = entity.getDescription();
        price = entity.getPrice();
        category = new CategoryConfigurationsConfigurationItemsOutputDTO(entity.getCategory());
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Double getPrice() {
        return price;
    }

    public CategoryConfigurationsConfigurationItemsOutputDTO getCategory() {
        return category;
    }

}
