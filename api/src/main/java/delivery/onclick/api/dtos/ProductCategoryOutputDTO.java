package delivery.onclick.api.dtos;

import java.util.UUID;

import delivery.onclick.api.entities.Product;

public class ProductCategoryOutputDTO {

    private UUID id;
    private String name;
    private String description;
    private Double price;
    private CategoryOutputDTO category;

    public ProductCategoryOutputDTO() {
    }

    public ProductCategoryOutputDTO(Product entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.description = entity.getDescription();
        this.price = entity.getPrice();
        this.category = new CategoryOutputDTO(entity.getCategory());
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

    public CategoryOutputDTO getCategory() {
        return category;
    }

}
