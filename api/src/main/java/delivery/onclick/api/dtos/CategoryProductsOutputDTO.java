package delivery.onclick.api.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.entities.Category;
import delivery.onclick.api.entities.Product;

public class CategoryProductsOutputDTO {

    private UUID id;
    private String name;
    private List<ProductOutputDTO> products = new ArrayList<>();

    public CategoryProductsOutputDTO() {
    }

    public CategoryProductsOutputDTO(Category entity) {
        id = entity.getId();
        name = entity.getName();
        for (Product x : entity.getProducts()) {
            products.add(new ProductOutputDTO(x));
        }
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<ProductOutputDTO> getProducts() {
        return products;
    }

}
