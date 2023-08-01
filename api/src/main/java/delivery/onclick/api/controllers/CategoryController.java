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

import delivery.onclick.api.dtos.CategoryGroupOutputDTO;
import delivery.onclick.api.dtos.CategoryInsertDTO;
import delivery.onclick.api.dtos.CategoryOutputDTO;
import delivery.onclick.api.dtos.CategoryUpdateDTO;
import delivery.onclick.api.services.CategoryService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/categories")
public class CategoryController {

    @Autowired
    private CategoryService service;

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryOutputDTO insert(@Valid @RequestBody CategoryInsertDTO dto) {
        return service.insert(dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @GetMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CategoryGroupOutputDTO findById(@PathVariable UUID id) {
        return service.findById(id);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CategoryOutputDTO update(@PathVariable UUID id, @Valid @RequestBody CategoryUpdateDTO input) {
        return service.update(id, input);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}
