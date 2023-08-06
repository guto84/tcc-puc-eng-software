package delivery.onclick.api.entities.enums;

public enum OrderStatus {

    RECEIVED("RECEIVED"),
    IN_PREPARATION("IN_PREPARATION"),
    READY("READY"),
    OUT_FOR_DELIVERY("OUT_FOR_DELIVERY"),
    DELIVERED("DELIVERED");

    public final String label;

    private OrderStatus(String label) {
        this.label = label;
    }
}
