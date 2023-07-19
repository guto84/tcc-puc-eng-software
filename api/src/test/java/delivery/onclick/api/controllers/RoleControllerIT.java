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

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class RoleControllerIT {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void findAllShouldReturnCompanyList() throws Exception {
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.get("/roles").accept(MediaType.APPLICATION_JSON));

        result.andExpect(MockMvcResultMatchers.status().isOk());
        result.andExpect(MockMvcResultMatchers.jsonPath("$[0].authority").value("ROLE_ADMIN"));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[1].authority").value("ROLE_PROVIDER"));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[2].authority").value("ROLE_USER"));
    }
}
