package delivery.onclick.api.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import delivery.onclick.api.dtos.CompanyDTO;
import delivery.onclick.api.entities.Company;
import delivery.onclick.api.repositories.CompanyRepository;
import delivery.onclick.api.services.CompanyService;

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
}
