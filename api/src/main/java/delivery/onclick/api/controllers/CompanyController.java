package delivery.onclick.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import delivery.onclick.api.dtos.CompanyDTO;
import delivery.onclick.api.services.CompanyService;

@RestController
@RequestMapping(value = "/companies")
public class CompanyController {
    
    @Autowired
    private CompanyService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CompanyDTO insert(@RequestBody CompanyDTO dto) {
        return service.insert(dto);
    }
}
