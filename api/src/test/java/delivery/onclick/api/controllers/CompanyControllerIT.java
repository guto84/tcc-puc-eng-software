package delivery.onclick.api.controllers;

import java.util.UUID;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import delivery.onclick.api.dtos.CompanyDTO;
import delivery.onclick.api.factories.CompanyFactory;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class CompanyControllerIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private UUID existingId;
    private UUID nonExistingId;

    @BeforeEach
    void setUp() throws Exception {
        existingId = UUID.fromString("b239870c-5335-4421-8ecb-8df934645b45");
        nonExistingId = UUID.fromString("dbccdfc4-181d-48fd-80bc-35f954f8689f");
    }

    @Test
    public void insertShouldReturnCompanyDTOWhenSuccessfullyRegistered() throws Exception {
        CompanyDTO companyDTO = CompanyFactory.createCompanyDTO();
        String jsonBody = objectMapper.writeValueAsString(companyDTO);

        ResultActions result = mockMvc.perform(MockMvcRequestBuilders
                .post("/companies")
                .content(jsonBody)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isCreated());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.name").value(companyDTO.getName()));
        result.andExpect(MockMvcResultMatchers.jsonPath("$.url").value(companyDTO.getUrl()));
    }

    @Test
    public void findAllShouldReturnCompanyList() throws Exception {
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.get("/companies").accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isOk());
        result.andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value("companyOne"));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[1].name").value("companyTwo"));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[2].name").value("companyThree"));
    }

    @Test
    public void findByIdShouldReturnCompanyWhenIdExists() throws Exception {
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.get("/companies/{id}", existingId)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isOk());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());
        result.andExpect(MockMvcResultMatchers.jsonPath("$.name").value("companyOne"));
        result.andExpect(MockMvcResultMatchers.jsonPath("$.url").value("company-one"));
    }

    @Test
    public void findByIdShouldReturnNotFoundWhenIdDoesNotExists() throws Exception {
        CompanyDTO companyDTO = CompanyFactory.createCompanyDTO();
        String jsonBody = objectMapper.writeValueAsString(companyDTO);

        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.put("/products/{id}", nonExistingId)
                        .content(jsonBody)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isNotFound());
    }
}
