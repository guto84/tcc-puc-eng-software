package delivery.onclick.api.controllers;

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
}
