package delivery.onclick.api.factories;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import delivery.onclick.api.dtos.RoleDTO;
import delivery.onclick.api.entities.Role;

public class RoleFactory {

    public static List<Role> listRoles() {
        List<Role> list = new ArrayList<>();
        Role role1 = new Role(UUID.fromString("2f4e2361-1bef-4cda-b971-7909199ad324"), "ROLE_ADMIN");
        Role role2 = new Role(UUID.fromString("c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010"), "ROLE_PROVIDER");
        Role role3 = new Role(UUID.fromString("776f5adb-269a-410a-b8a7-ecb83d3ff06b"), "ROLE_USER");

        list.add(role1);
        list.add(role2);
        list.add(role3);
        return list;
    }

    public static List<RoleDTO> listRolesDTO() {
        return listRoles().stream().map(x -> new RoleDTO(x)).toList();
    }

}
