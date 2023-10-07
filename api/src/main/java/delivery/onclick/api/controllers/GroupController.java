package delivery.onclick.api.controllers;

import java.util.List;
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

import delivery.onclick.api.dtos.GroupCategoriesOutputDTO;
import delivery.onclick.api.dtos.GroupCategoriesProductsOutputDTO;
import delivery.onclick.api.dtos.GroupCompanyOutputDTO;
import delivery.onclick.api.dtos.GroupInsertDTO;
import delivery.onclick.api.dtos.GroupOutputDTO;
import delivery.onclick.api.dtos.GroupUpdateDTO;
import delivery.onclick.api.services.GroupService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/groups")
public class GroupController {

    @Autowired
    private GroupService service;

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public GroupOutputDTO insert(@Valid @RequestBody GroupInsertDTO dto) {
        return service.insert(dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<GroupOutputDTO> findAll() {
        return service.findAll();
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @GetMapping(value = "/categories/products")
    @ResponseStatus(HttpStatus.OK)
    public List<GroupCategoriesProductsOutputDTO> findAllCategoriesProducts() {
        return service.findAllCategoriesProducts();
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @GetMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public GroupCompanyOutputDTO findById(@PathVariable UUID id) {
        return service.findById(id);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public GroupOutputDTO update(@PathVariable UUID id, @Valid @RequestBody GroupUpdateDTO dto) {
        return service.update(id, dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @GetMapping(value = "/{id}/categories")
    @ResponseStatus(HttpStatus.OK)
    public GroupCategoriesOutputDTO findByIdCategories(@PathVariable UUID id) {
        return service.findByIdCategories(id);
    }
}
