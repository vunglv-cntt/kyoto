import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { functions } from "lodash";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat:  21.0285 , 
  lng: 105.8542 , 
};

function Googlemap()  {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY", 
  });

  if (loadError) return <div>Đã xảy ra lỗi khi tải bản đồ</div>;
  if (!isLoaded) return <div>Đang tải bản đồ...</div>;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
  
      </GoogleMap>
    </div>
  );
};

export default Googlemap;
