package delivery.onclick.api.servicesImpl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.GroupCompanyOutputDTO;
import delivery.onclick.api.dtos.GroupInsertDTO;
import delivery.onclick.api.dtos.GroupOutputDTO;
import delivery.onclick.api.dtos.GroupUpdateDTO;
import delivery.onclick.api.entities.Group;
import delivery.onclick.api.repositories.GroupRepository;
import delivery.onclick.api.services.GroupService;
import delivery.onclick.api.services.UserService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class GroupServiceImpl implements GroupService {

    @Autowired
    private GroupRepository repository;

    @Autowired
    private UserService userService;

    @Transactional
    public GroupOutputDTO insert(GroupInsertDTO dto) {
        Group entity = new Group();
        entity.setName(dto.getName());
        entity.setCompany(userService.authenticated().getCompany());
        entity = repository.save(entity);
        return new GroupOutputDTO(entity);
    }

    @Transactional(readOnly = true)
    public List<GroupOutputDTO> findAll() {
        List<Group> list = repository.findAllByCompany(userService.authenticated().getCompany());
        return list.stream().map(x -> new GroupOutputDTO(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public GroupCompanyOutputDTO findById(UUID id) {
        Optional<Group> obj = repository.findById(id);
        Group group = obj.orElseThrow(() -> new ResourceNotFoundException());
        GroupCompanyOutputDTO dto = new GroupCompanyOutputDTO(group);
        return dto;
    }

    @Transactional
    public GroupOutputDTO update(UUID id, GroupUpdateDTO dto) {
        try {
            Group entity = repository.getReferenceById(id);
            entity.setName(dto.getName());
            entity = repository.save(entity);
            return new GroupOutputDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public void delete(UUID id) {
        Optional<Group> entity = repository.findById(id);
        entity.orElseThrow(() -> new ResourceNotFoundException());
        repository.deleteById(id);
    }

}
