package delivery.onclick.api.servicesImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.RoleDTO;
import delivery.onclick.api.entities.Role;
import delivery.onclick.api.repositories.RoleRepository;
import delivery.onclick.api.services.RoleService;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository repository;

    @Transactional(readOnly = true)
    public List<RoleDTO> findAll() {
        List<Role> list = repository.findAll();
        return list.stream().map(x -> new RoleDTO(x)).collect(Collectors.toList());
    }

}
