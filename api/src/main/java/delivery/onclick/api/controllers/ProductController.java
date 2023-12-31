package delivery.onclick.api.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import delivery.onclick.api.dtos.ProductCategoryConfigurationsConfigurationItemsOutputDTO;
import delivery.onclick.api.dtos.ProductCategoryOutputDTO;
import delivery.onclick.api.dtos.ProductInsertDTO;
import delivery.onclick.api.dtos.ProductOutputDTO;
import delivery.onclick.api.dtos.ProductUpdateDTO;
import delivery.onclick.api.services.ProductService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductCategoryOutputDTO findById(@PathVariable UUID id) {
        return service.findById(id);
    }

    @GetMapping(value = "/{id}/configurations")
    @ResponseStatus(HttpStatus.OK)
    public ProductCategoryConfigurationsConfigurationItemsOutputDTO findByIdConfigurations(@PathVariable UUID id) {
        return service.findByIdConfigurations(id);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductOutputDTO insert(@Valid @RequestBody ProductInsertDTO dto) {
        return service.insert(dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductOutputDTO update(@PathVariable UUID id, @Valid @RequestBody ProductUpdateDTO dto) {
        return service.update(id, dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}
