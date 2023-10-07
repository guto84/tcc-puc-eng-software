package delivery.onclick.api.projections;

import java.util.Date;

public interface OrderDetailsProjection {
    
    byte[] getId();

    String getName();

    String getAddress();

    String getAddressNumber();

    String getAddressComplment();

    String getDistrict();

    String getZipcode();

    String getPhone();

    String getStatus();

    Date getCreatedAt();

    byte[] getOrderItemId();

    Double getOrderItemQuantity();
}
