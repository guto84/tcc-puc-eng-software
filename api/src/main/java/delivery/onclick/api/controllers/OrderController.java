package delivery.onclick.api.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import delivery.onclick.api.dtos.OrderInsertDTO;
import delivery.onclick.api.dtos.OrderOrderItemsProductsOrderConfigurationsDTO;
import delivery.onclick.api.dtos.OrderOutputDTO;
import delivery.onclick.api.dtos.OrderUpdateDTO;
import delivery.onclick.api.services.OrderService;

@RestController
@RequestMapping(value = "orders")
public class OrderController {

    @Autowired
    private OrderService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    OrderOutputDTO insert(@RequestBody OrderInsertDTO dto) {
        return service.insert(dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Page<OrderOutputDTO> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "size", defaultValue = "10") Integer size,
            @RequestParam(value = "direction", defaultValue = "asc") String direction) {
        var sortDirection = "desc".equalsIgnoreCase(direction) ? Direction.DESC : Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortDirection, "createdAt"));
        return service.findByCompanyWithPagination(pageable);
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public OrderOrderItemsProductsOrderConfigurationsDTO findById(@PathVariable UUID id) {
        return service.findById(id);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public OrderOutputDTO update(@PathVariable UUID id, @RequestBody OrderUpdateDTO dto) {
        return service.update(id, dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_PROVIDER')")
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}
