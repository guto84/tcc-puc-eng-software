package delivery.onclick.api.servicesImpl;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.RoleDTO;
import delivery.onclick.api.dtos.UserInsertDTO;
import delivery.onclick.api.dtos.UserOutputDTO;
import delivery.onclick.api.dtos.UserUpdateDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.entities.Role;
import delivery.onclick.api.entities.User;
import delivery.onclick.api.projections.UserDetailsProjection;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.repositories.UserRepository;
import delivery.onclick.api.services.UserService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import delivery.onclick.api.utils.ByteToUUID;
import jakarta.persistence.EntityNotFoundException;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private CompanyRepository companyRepository;

    @Transactional
    public UserInsertDTO insert(UserInsertDTO dto) {
        try {
            Company company = companyRepository.getReferenceById(dto.getCompany().getId());
            User entity = new User();

            Set<Role> roles = new HashSet<>();
            for (RoleDTO role : dto.getRoles()) {
                roles.add(new Role(role.getId(), role.getAuthority()));
            }
            entity.setName(dto.getName());
            entity.setEmail(dto.getEmail());
            entity.setRoles(roles);
            entity.setPassword(dto.getPassword());
            entity.setCompany(company);

            entity = repository.save(entity);
            return new UserInsertDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional(readOnly = true)
    public UserOutputDTO findById(UUID id) {
        try {
            List<UserDetailsProjection> result = repository.searchUserAndRolesById(id);
            User entity = new User();

            entity.setId(ByteToUUID.convert(result.get(0).getId()));
            entity.setName(result.get(0).getName());
            entity.setEmail(result.get(0).getEmail());
            for (UserDetailsProjection x : result) {
                entity.addRole(new Role(ByteToUUID.convert(x.getRoleId()), x.getAuthority()));
            }

            return new UserOutputDTO(entity);
        } catch (IndexOutOfBoundsException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public UserUpdateDTO update(UUID id, UserUpdateDTO dto) {
        try {
            // projection to dto
            List<UserDetailsProjection> result = repository.searchUserAndRolesById(id);
            Company company = companyRepository.getReferenceById(ByteToUUID.convert(result.get(0).getCompanyId()));
            User entity = new User();
            entity.setId(ByteToUUID.convert(result.get(0).getId()));
            entity.setName(result.get(0).getName());
            entity.setEmail(result.get(0).getEmail());
            entity.setPassword(result.get(0).getPassword());
            entity.setCompany(company);
            for (UserDetailsProjection x : result) {
                entity.addRole(new Role(ByteToUUID.convert(x.getRoleId()), x.getAuthority()));
            }

            // dto to entity
            for (RoleDTO role : dto.getRoles()) {
                entity.addRole(new Role(role.getId(), role.getAuthority()));
            }
            entity.setName(dto.getName());
            entity.setEmail(dto.getEmail());

            entity = repository.save(entity);
            return new UserUpdateDTO(entity);
        } catch (IndexOutOfBoundsException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public void delete(UUID id) {
        Optional<User> entity = repository.findById(id);
		entity.orElseThrow(() -> new ResourceNotFoundException());
		repository.deleteById(id);
    }

}
