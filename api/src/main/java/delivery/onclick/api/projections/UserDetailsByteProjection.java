package delivery.onclick.api.projections;

// import java.util.UUID;

public interface UserDetailsByteProjection {

    byte[] getId();

    String getName();

    String getEmail();

    String getPassword();

    byte[] getCompanyId();

    byte[] getRoleId();

    String getAuthority();

}
