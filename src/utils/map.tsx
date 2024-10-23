/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
"use client";

//Map component Component from library
import { GoogleMap, MarkerF } from "@react-google-maps/api";

//Map's styling
export const defaultMapContainerStyle = {
  width: "80%",
  height: "300px",
  borderRadius: "15px 15px 15px 15px"
};

//Meriton Retail Precinct -Mascot Central
const defaultMapCenter = {
  lat: -33.91888582560421,
  lng: 151.18314934886357
};

const defaultMapZoom = 13;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap"
};

const MapComponent = () => {
  return (
    <div>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>

      <MarkerF position={defaultMapCenter}></MarkerF>
    </div>
  );
};

export { MapComponent };
