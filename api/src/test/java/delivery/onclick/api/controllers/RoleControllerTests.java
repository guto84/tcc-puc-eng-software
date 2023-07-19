package delivery.onclick.api.controllers;

import static org.mockito.Mockito.when;

import java.util.List;

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

import delivery.onclick.api.dtos.RoleDTO;
import delivery.onclick.api.factories.RoleFactory;
import delivery.onclick.api.services.RoleService;

@WebMvcTest(RoleController.class)
public class RoleControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RoleService service;

    private List<RoleDTO> rolesDTO;

    @BeforeEach
    void setUp() throws Exception {
        rolesDTO = RoleFactory.createListRolesDTO();

        when(service.findAll()).thenReturn(rolesDTO);
    }

    @Test
    public void findAllShouldReturnRoleList() throws Exception {
        ResultActions result = mockMvc
                .perform(MockMvcRequestBuilders.get("/roles").accept(MediaType.APPLICATION_JSON));

        result.andExpect((MockMvcResultMatchers.status().isOk()));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[0].authority").value(rolesDTO.get(0).getAuthority()));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[1].authority").value(rolesDTO.get(1).getAuthority()));
        result.andExpect(MockMvcResultMatchers.jsonPath("$[2].authority").value(rolesDTO.get(2).getAuthority()));
    }
}
