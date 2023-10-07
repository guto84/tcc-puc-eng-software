package delivery.onclick.api.utils;

import java.nio.ByteBuffer;
import java.util.UUID;

public class ByteToUUID {

    public static UUID convert(byte[] value) {
        ByteBuffer byteBuffer = ByteBuffer.wrap(value);
        long mostSigBits = byteBuffer.getLong();
        long leastSigBits = byteBuffer.getLong();
        return new UUID(mostSigBits, leastSigBits);
    }
}
