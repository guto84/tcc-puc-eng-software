package delivery.onclick.api.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import delivery.onclick.api.dtos.CompanyInsertDTO;
import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.dtos.CompanyUpdateDTO;
import delivery.onclick.api.dtos.CompanyUsersOutputDTO;
import delivery.onclick.api.services.CompanyService;

@RestController
@RequestMapping(value = "/companies")
public class CompanyController {

    @Autowired
    private CompanyService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CompanyOutputDTO insert(@RequestBody CompanyInsertDTO dto) {
        return service.insert(dto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CompanyOutputDTO> findAll() {
        return service.findAll();
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CompanyOutputDTO findById(@PathVariable UUID id) {
        return service.findById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CompanyOutputDTO update(@PathVariable UUID id, @RequestBody CompanyUpdateDTO input) {
        return service.update(id, input);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }

    @GetMapping(value = "/{id}/users")
    @ResponseStatus(HttpStatus.OK)
    public CompanyUsersOutputDTO findByIdUsers(@PathVariable UUID id) {
        return service.findByIdUsers(id);
    }
}
