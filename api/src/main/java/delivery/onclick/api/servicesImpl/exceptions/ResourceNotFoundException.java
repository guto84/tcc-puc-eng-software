package delivery.onclick.api.servicesImpl.exceptions;

public class ResourceNotFoundException extends RuntimeException {

	public ResourceNotFoundException() {
		super("Resource not found");
	}
}
