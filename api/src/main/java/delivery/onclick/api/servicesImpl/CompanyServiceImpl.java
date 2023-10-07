package delivery.onclick.api.servicesImpl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.CompanyGroupsCategoriesProductsOutputDTO;
import delivery.onclick.api.dtos.CompanyInsertDTO;
import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.dtos.CompanyUpdateDTO;
import delivery.onclick.api.dtos.CompanyUsersOutputDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.services.CompanyService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepository repository;

    @Transactional
    public CompanyOutputDTO insert(CompanyInsertDTO dto) {
        Company input = new Company();
        input.setName(dto.getName());
        input.setUrl(dto.getUrl());

        Company entity = repository.save(input);
        return new CompanyOutputDTO(entity);
    }

    @Transactional(readOnly = true)
    public List<CompanyOutputDTO> findAll() {
        List<Company> list = repository.findAll();
        return list.stream().map(x -> new CompanyOutputDTO(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CompanyOutputDTO findById(UUID id) {
        Optional<Company> entity = repository.findById(id);
        Company company = entity.orElseThrow(() -> new ResourceNotFoundException());
        return new CompanyOutputDTO(company);
    }

    @Transactional
    public CompanyOutputDTO update(UUID id, CompanyUpdateDTO dto) {
        try {
            Company entity = repository.getReferenceById(id);
            entity.setName(dto.getName());
            entity.setUrl(dto.getUrl());
            Company data = repository.save(entity);
            return new CompanyOutputDTO(data);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException();
        }
    }

    @Transactional
    public void delete(UUID id) {
        Optional<Company> entity = repository.findById(id);
        entity.orElseThrow(() -> new ResourceNotFoundException());
        repository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public CompanyUsersOutputDTO findByIdUsers(UUID id) {
        Optional<Company> entity = repository.findByIdUsers(id);
        Company company = entity.orElseThrow(() -> new ResourceNotFoundException());
        return new CompanyUsersOutputDTO(company);
    }

    @Transactional(readOnly = true)
    public CompanyGroupsCategoriesProductsOutputDTO findByUrl(String url) {
        Optional<Company> entity = repository.findByUrl(url);
        Company company = entity.orElseThrow(() -> new ResourceNotFoundException());
        return new CompanyGroupsCategoriesProductsOutputDTO(company);
    }
}
