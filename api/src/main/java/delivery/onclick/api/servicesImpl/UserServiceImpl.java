package delivery.onclick.api.servicesImpl;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.RoleDTO;
import delivery.onclick.api.dtos.UserInsertDTO;
import delivery.onclick.api.dtos.UserOutputDTO;
import delivery.onclick.api.dtos.UserRoleOutputDTO;
import delivery.onclick.api.dtos.UserUpdateDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.entities.Role;
import delivery.onclick.api.entities.User;
import delivery.onclick.api.projections.UserDetailsProjection;
import delivery.onclick.api.projections.UserDetailsByteProjection;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.repositories.UserRepository;
import delivery.onclick.api.services.UserService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import delivery.onclick.api.utils.ByteToUUID;
import jakarta.persistence.EntityNotFoundException;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {

    @Autowired
    Environment env;

    @Autowired
    private UserRepository repository;

    @Autowired
    private CompanyRepository companyRepository;

    @Transactional
    public UserInsertDTO insert(UserInsertDTO dto) {
        try {
            BCryptPasswordEncoder encrypter = new BCryptPasswordEncoder();
            Company company = companyRepository.getReferenceById(dto.getCompany().getId());
            User entity = new User();

            Set<Role> roles = new HashSet<>();
            for (RoleDTO role : dto.getRoles()) {
                roles.add(new Role(role.getId(), role.getAuthority()));
            }
            entity.setName(dto.getName());
            entity.setEmail(dto.getEmail());
            entity.setRoles(roles);
            entity.setPassword(encrypter.encode(dto.getPassword()));
            entity.setCompany(company);

            entity = repository.save(entity);
            return new UserInsertDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional(readOnly = true)
    public UserRoleOutputDTO findById(UUID id) {
        try {
            User entity = new User();
            String testProperty = "test";
            if (testProperty.equals(env.getProperty("spring.profiles.active"))) {
                List<UserDetailsByteProjection> result = repository.searchUserAndRolesByteById(id);
                entity.setId(ByteToUUID.convert(result.get(0).getId()));
                entity.setName(result.get(0).getName());
                entity.setEmail(result.get(0).getEmail());
                for (UserDetailsByteProjection x : result) {
                    entity.addRole(new Role(ByteToUUID.convert(x.getRoleId()), x.getAuthority()));
                }
            }
            if (!testProperty.equals(env.getProperty("spring.profiles.active"))) {
                List<UserDetailsProjection> result = repository.searchUserAndRolesById(id);
                entity.setId(result.get(0).getId());
                entity.setName(result.get(0).getName());
                entity.setEmail(result.get(0).getEmail());
                for (UserDetailsProjection x : result) {
                    entity.addRole(new Role(x.getRoleId(), x.getAuthority()));
                }
            }

            return new UserRoleOutputDTO(entity);
        } catch (IndexOutOfBoundsException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public UserUpdateDTO update(UUID id, UserUpdateDTO dto) {
        try {
            User entity = new User();

            String testProperty = "test";
            if (testProperty.equals(env.getProperty("spring.profiles.active"))) {
                List<UserDetailsByteProjection> result = repository.searchUserAndRolesByteById(id);
                Company company = companyRepository.getReferenceById(ByteToUUID.convert(result.get(0).getCompanyId()));
                entity.setCompany(company);
                entity.setId(ByteToUUID.convert(result.get(0).getId()));
                entity.setName(result.get(0).getName());
                entity.setEmail(result.get(0).getEmail());
                entity.setPassword(result.get(0).getPassword());
                for (UserDetailsByteProjection x : result) {
                    entity.addRole(new Role(ByteToUUID.convert(x.getRoleId()), x.getAuthority()));
                }
            }
            if (!testProperty.equals(env.getProperty("spring.profiles.active"))) {
                List<UserDetailsProjection> result = repository.searchUserAndRolesById(id);
                Company company = companyRepository.getReferenceById(result.get(0).getCompanyId());
                entity.setCompany(company);
                entity.setId(result.get(0).getId());
                entity.setName(result.get(0).getName());
                entity.setEmail(result.get(0).getEmail());
                entity.setPassword(result.get(0).getPassword());
                for (UserDetailsProjection x : result) {
                    entity.addRole(new Role(x.getRoleId(), x.getAuthority()));
                }
            }

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

    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = new User();
        user.setEmail(username);
        String testProperty = "test";
        if (testProperty.equals(env.getProperty("spring.profiles.active"))) {
            List<UserDetailsByteProjection> result = repository.searchUserAndRolesByEmailByte(username);
            if (result.size() == 0) {
                throw new UsernameNotFoundException("User not found");
            }
            Company company = companyRepository.getReferenceById(ByteToUUID.convert(result.get(0).getCompanyId()));
            user.setCompany(company);
            user.setPassword(result.get(0).getPassword());
            for (UserDetailsByteProjection item : result) {
                user.addRole(new Role(ByteToUUID.convert(item.getRoleId()), item.getAuthority()));
            }
        }
        if (!testProperty.equals(env.getProperty("spring.profiles.active"))) {
            List<UserDetailsProjection> result = repository.searchUserAndRolesByEmail(username);
            if (result.size() == 0) {
                throw new UsernameNotFoundException("User not found");
            }
            Company company = companyRepository.getReferenceById(result.get(0).getCompanyId());
            user.setCompany(company);
            user.setPassword(result.get(0).getPassword());
            for (UserDetailsProjection projection : result) {
                user.addRole(new Role(projection.getRoleId(), projection.getAuthority()));
            }
        }
        return user;
    }

    public User authenticated() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            Jwt jwtPrincipal = (Jwt) authentication.getPrincipal();
            String username = jwtPrincipal.getClaim("username");
            return repository.findByEmail(username).get();
        } catch (Exception e) {
            throw new UsernameNotFoundException("User not found");
        }
    }

    @Transactional(readOnly = true)
    public UserOutputDTO getMe() {
        User user = authenticated();
        return new UserOutputDTO(user);
    }
}
