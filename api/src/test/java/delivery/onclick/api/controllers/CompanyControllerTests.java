package delivery.onclick.api.controllers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

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

import delivery.onclick.api.dtos.CompanyDTO;
import delivery.onclick.api.factories.CompanyFactory;
import delivery.onclick.api.services.CompanyService;

@WebMvcTest(CompanyController.class)
public class CompanyControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CompanyService service;

    @Autowired
    private ObjectMapper objectMapper;

    private CompanyDTO companyDTO;

    @BeforeEach
    void setUp() throws Exception {
        companyDTO = CompanyFactory.createCompanyDTO();

        when(service.insert(any())).thenReturn(companyDTO);
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
}
