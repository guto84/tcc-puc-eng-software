package delivery.onclick.api.servicesImpl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.CompanyDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.services.CompanyService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;

@Service
public class CompanyServiceImpl implements CompanyService {
    
        @Autowired
    private CompanyRepository repository;

    @Transactional
    public CompanyDTO insert(CompanyDTO dto) {
        Company entity = new Company();
        entity.setName(dto.getName());
        entity.setUrl(dto.getUrl());
        entity = repository.save(entity);
        return new CompanyDTO(entity);
    }

    @Transactional(readOnly = true)
    public List<CompanyDTO> findAll() {
        List<Company> list = repository.findAll();
        return list.stream().map(x -> new CompanyDTO(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CompanyDTO findById(UUID id) {
        Optional<Company> entity = repository.findById(id);
        Company company = entity.orElseThrow(() -> new ResourceNotFoundException(id));
        return new CompanyDTO(company);
    }
}
