package delivery.onclick.api.controllers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;

import delivery.onclick.api.dtos.CompanyOutputDTO;
import delivery.onclick.api.factories.CompanyFactory;
import delivery.onclick.api.services.CompanyService;
import delivery.onclick.api.servicesImpl.exceptions.ResourceNotFoundException;

@WebMvcTest(CompanyController.class)
public class CompanyControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CompanyService service;

    @Autowired
    private ObjectMapper objectMapper;

    private UUID existingId;
    private UUID nonExistingId;
    private CompanyOutputDTO companyDTO;
    private List<CompanyOutputDTO> companiesDTO;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45");
        nonExistingId = UUID.fromString("dbccdfc4-181d-48fd-80bc-35f954f8689f");
        companyDTO = CompanyFactory.companyDTO();
        companiesDTO = CompanyFactory.listCompaniesDTO();

        when(service.insert(any())).thenReturn(companyDTO);
        when(service.findAll()).thenReturn(companiesDTO);
        when(service.findById(existingId)).thenReturn(companyDTO);
        when(service.findById(nonExistingId)).thenThrow(ResourceNotFoundException.class);
        when(service.update(eq(existingId), any())).thenReturn(companyDTO);
        when(service.update(eq(nonExistingId), any())).thenThrow(ResourceNotFoundException.class);
        doNothing().when(service).delete(existingId);
        doThrow(ResourceNotFoundException.class).when(service).delete(nonExistingId);
    }

    @Test
    public void insertShouldReturnCompanyDTOWhenSuccessfullyRegistered() throws Exception {
        String jsonBody = objectMapper.writeValueAsString(companyDTO);
        ResultActions result = mockMvc.perform(MockMvcRequestBuilders
                .post("/companies")
                .content(jsonBody)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isCreated());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.name").exists());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.url").exists());
    }

    @Test
    public void findAllShouldReturnCompanyList() throws Exception {
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.get("/companies").accept(MediaType.APPLICATION_JSON));

        result.andExpect((MockMvcResultMatchers.status().isOk()));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value(companiesDTO.get(0).getName()));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[1].name").value(companiesDTO.get(1).getName()));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[2].name").value(companiesDTO.get(2).getName()));
    }

    @Test
    public void findByIdShouldReturnCompanyWhenIdExists() throws Exception {
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.get("/companies/{id}", existingId)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isOk());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.name").value(companyDTO.getName()));
        result.andExpect(MockMvcResultMatchers.jsonPath("$.url").value(companyDTO.getUrl()));
    }

    @Test
    public void findByIdShouldReturnNotFoundWhenIdDoesNotExists() throws Exception {
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.get("/companies/{id}", nonExistingId)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void updateShouldReturnCompanyDTOWhenIdExists() throws Exception {
        String jsonBody = objectMapper.writeValueAsString(companyDTO);
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.put("/companies/{id}", existingId)
                        .content(jsonBody)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isOk());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.name").value(companyDTO.getName()));
        result.andExpect(MockMvcResultMatchers.jsonPath("$.url").value(companyDTO.getUrl()));
    }

    @Test
    public void updateShouldReturnNotFoundWhenIdDoesNotExists() throws Exception {
        String jsonBody = objectMapper.writeValueAsString(companyDTO);
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.put("/companies/{id}", nonExistingId)
                        .content(jsonBody)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void deleteShouldReturnNoContentWhenIdExists() throws Exception {
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.delete("/companies/{id}", existingId)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isNoContent());
    }

    @Test
    public void deleteShouldReturnNotFoundWhenIdDoesNotExists() throws Exception {
                ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.delete("/companies/{id}", nonExistingId)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isNotFound());
    }
}
