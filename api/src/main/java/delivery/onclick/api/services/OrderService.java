package delivery.onclick.api.services;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestBody;

import delivery.onclick.api.dtos.OrderInsertDTO;
import delivery.onclick.api.dtos.OrderOrderItemsProductsOrderConfigurationsDTO;
import delivery.onclick.api.dtos.OrderOutputDTO;
import delivery.onclick.api.dtos.OrderUpdateDTO;

public interface OrderService {
    
    OrderOutputDTO insert(@RequestBody OrderInsertDTO dto);

    OrderOrderItemsProductsOrderConfigurationsDTO findById(UUID id);

    Page<OrderOutputDTO> findByCompanyWithPagination(Pageable pageable);

    OrderOutputDTO update(UUID id, OrderUpdateDTO dto);

    void delete(UUID id);
}
