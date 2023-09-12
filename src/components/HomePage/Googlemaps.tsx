import {
  GoogleMap,
  GoogleMapProps,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { GG_MAP_KEY } from "@constants/schema";
import { memo, useCallback, useMemo, useState } from "react";

type MyProps = {
  marks?: { lat: number; lng: number }[];
};

function Googlemap(props: GoogleMapProps & MyProps) {
  const { mapContainerClassName, marks = [] } = props;
  const [map, setMap] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GG_MAP_KEY,
  });
  const currentCenter = useMemo(() => {
    return marks.length > 0 ? marks[0] : { lat: 0, lng: 0 };
  }, [marks]);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      center={currentCenter}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      {...props}
      mapContainerClassName={`w-[100%] ${mapContainerClassName}`}
    >
      {marks.map((mark) => (
        <Marker position={mark} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(Googlemap);
