import {
    GoogleMap,
    useLoadScript,
    MarkerF,
    InfoWindowF,
} from "@react-google-maps/api";
import { useState } from "react";
import { XaritaModal } from "./FillialCom";
import fillial from "../data/Fillial";

const FIllialXarita = () => {
    const [activeMarker, setActiveMarker] = useState(null);

    const handleMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    });

    return (
        <div>
            <div className="w-full">
                {isLoaded ? (
                    <GoogleMap
                        center={{ lat: 41.311081, lng: 69.240562 }}
                        zoom={13}
                        mapContainerStyle={{ width: "100%", height: "80vh" }}
                        onClick={() => setActiveMarker(null)}
                    >
                        {fillial.map((item) => (
                            <MarkerF
                                key={item.id}
                                position={item.position}
                                onClick={() => handleMarker(item.id)}
                                icon={{
                                    url: "https://cdn-icons-png.flaticon.com/512/4108/4108824.png",
                                    scaledSize: { width: 40, height: 40 },
                                }}
                            >
                                {activeMarker === item.id ? (
                                    <InfoWindowF
                                        onCloseClick={() =>
                                            setActiveMarker(null)
                                        }
                                    >
                                        <XaritaModal item={item} />
                                    </InfoWindowF>
                                ) : null}
                            </MarkerF>
                        ))}
                    </GoogleMap>
                ) : null}
            </div>
        </div>
    );
};

export default FIllialXarita;
