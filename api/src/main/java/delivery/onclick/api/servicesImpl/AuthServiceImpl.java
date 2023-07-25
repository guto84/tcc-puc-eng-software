package delivery.onclick.api.servicesImpl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import delivery.onclick.api.entities.User;
import delivery.onclick.api.services.UserService;
import delivery.onclick.api.servicesImpl.exceptions.ForbiddenException;

@Service
public class AuthServiceImpl {

    @Autowired
    private UserService userService;

    public void validateSelfOrAdmin(UUID userId) {
        User me = userService.authenticated();
        if (!me.hasRole("ROLE_ADMIN") && me.getId().equals(userId)) {
            throw new ForbiddenException("Access denied");
        }
    }
}
