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

import delivery.onclick.api.dtos.ConfigurationCategoryOutputDTO;
import delivery.onclick.api.dtos.ConfigurationInsertDTO;
import delivery.onclick.api.dtos.ConfigurationOutputDTO;
import delivery.onclick.api.dtos.ConfigurationUpdateDTO;
import delivery.onclick.api.services.ConfigurationService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/configurations")
public class ConfigurationController {

    @Autowired
    private ConfigurationService service;

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ConfigurationOutputDTO insert(@Valid @RequestBody ConfigurationInsertDTO dto) {
        return service.insert(dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @GetMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ConfigurationCategoryOutputDTO findById(@PathVariable UUID id) {
        return service.findById(id);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ConfigurationOutputDTO update(@PathVariable UUID id, @Valid @RequestBody ConfigurationUpdateDTO input) {
        return service.update(id, input);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}
