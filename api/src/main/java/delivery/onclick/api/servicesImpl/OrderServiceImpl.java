package delivery.onclick.api.servicesImpl;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.OrderConfigurationOutputDTO;
import delivery.onclick.api.dtos.OrderInsertDTO;
import delivery.onclick.api.dtos.OrderItemOrderConfigurationOutputDTO;
import delivery.onclick.api.dtos.OrderOrderItemsProductsOrderConfigurationsDTO;
import delivery.onclick.api.dtos.OrderOutputDTO;
import delivery.onclick.api.dtos.OrderUpdateDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.entities.ConfigurationItem;
import delivery.onclick.api.entities.Order;
import delivery.onclick.api.entities.OrderConfiguration;
import delivery.onclick.api.entities.OrderItem;
import delivery.onclick.api.entities.Product;
import delivery.onclick.api.entities.enums.OrderStatus;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.repositories.OrderConfigurationRepository;
import delivery.onclick.api.repositories.OrderItemRepository;
import delivery.onclick.api.repositories.OrderRepository;
import delivery.onclick.api.services.OrderService;
import delivery.onclick.api.services.UserService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private OrderConfigurationRepository orderConfigurationRepository;

    @Transactional
    public OrderOutputDTO insert(OrderInsertDTO dto) {
        Optional<Company> company = companyRepository.findCompanyByUrl(dto.getCompany().getUrl());
        Order order = new Order();
        order.setName(dto.getName());
        order.setAddress(dto.getAddress());
        order.setAddressNumber(dto.getAddressNumber());
        order.setAddressComplement(dto.getAddressComplement());
        order.setDistrict(dto.getDistrict());
        order.setZipcode(dto.getZipcode());
        order.setPhone(dto.getPhone());
        order.setStatus(OrderStatus.valueOf("RECEIVED"));
        order.setCompany(company.get());
        order = repository.save(order);

        order.getOrderItems().clear();
        for (OrderItemOrderConfigurationOutputDTO orderItemDTO : dto.getOrderItems()) {
            Product product = new Product();
            product.setId(orderItemDTO.getProduct().getId());

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setProduct(product);
            orderItem.setOrder(order);
            orderItem.setQuantity(orderItemDTO.getQuantity());
            orderItemRepository.save(orderItem);

            orderItem.getOrderConfigurations().clear();
            for (OrderConfigurationOutputDTO orderConfigurationDTO : orderItemDTO.getOrderConfigurations()) {
                ConfigurationItem configurationItem = new ConfigurationItem();
                configurationItem.setId(orderConfigurationDTO.getConfigurationItem().getId());

                OrderConfiguration orderConfiguration = new OrderConfiguration();
                orderConfiguration.setOrderItem(orderItem);
                orderConfiguration.setQuantity(orderConfigurationDTO.getQuantity());
                orderConfiguration.setConfigurationItem(configurationItem);
                orderConfigurationRepository.save(orderConfiguration);
            }
        }

        return new OrderOutputDTO(order);
    }

    @Transactional(readOnly = true)
    public OrderOrderItemsProductsOrderConfigurationsDTO findById(UUID id) {
        Optional<Order> obj = repository.findById(id);
        Order entity = obj.orElseThrow(() -> new ResourceNotFoundException());
        return new OrderOrderItemsProductsOrderConfigurationsDTO(entity);
    }

    @Transactional(readOnly = true)
    public Page<OrderOutputDTO> findByCompanyWithPagination(Pageable pageable) {
        Page<Order> list = repository.findByCompanyWithPagination(userService.authenticated().getCompany(), pageable);
        return list.map(x -> new OrderOutputDTO(x));
    }

    @Transactional
    public OrderOutputDTO update(UUID id, OrderUpdateDTO dto) {
        try {
            Order entity = repository.getReferenceById(id);
            entity.setName(dto.getName());
            entity.setName(dto.getName());
            entity.setAddress(dto.getAddress());
            entity.setAddressNumber(dto.getAddressNumber());
            entity.setAddressComplement(dto.getAddressComplement());
            entity.setDistrict(dto.getDistrict());
            entity.setZipcode(dto.getZipcode());
            entity.setPhone(dto.getPhone());
            entity.setStatus(dto.getStatus());
            return new OrderOutputDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public void delete(UUID id) {
        Optional<Order> entity = repository.findById(id);
        entity.orElseThrow(() -> new ResourceNotFoundException());
        repository.deleteById(id);
    }

}
