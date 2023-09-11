import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { GG_MAP_KEY } from "@constants/schema";
import { memo, useCallback, useState } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 21.0285,
  lng: 105.8542,
};

function Googlemap() {
  const [map, setMap] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GG_MAP_KEY,
  });

  console.log(GG_MAP_KEY);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  );
}

export default memo(Googlemap);
