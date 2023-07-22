package delivery.onclick.api.projections;

public interface UserDetailsProjection {

    byte[] getId();

    String getName();

    String getEmail();

    String getPassword();
    
    byte[] getCompanyId();

    byte[] getRoleId();

    String getAuthority();
}
