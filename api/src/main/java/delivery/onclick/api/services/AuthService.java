package delivery.onclick.api.services;

import java.util.UUID;

public interface AuthService {
    
    void validateSelfOrAdmin(UUID userId);
}
