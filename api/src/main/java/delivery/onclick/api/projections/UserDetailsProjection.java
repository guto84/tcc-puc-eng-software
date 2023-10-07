package delivery.onclick.api.projections;

import java.util.UUID;

public interface UserDetailsProjection {

    UUID getId();

    String getName();

    String getEmail();

    String getPassword();

    UUID getCompanyId();

    UUID getRoleId();

    String getAuthority();

}
