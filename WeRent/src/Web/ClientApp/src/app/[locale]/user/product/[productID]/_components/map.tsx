'use client'
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
const containerStyle = {
  width: "100%",
  height: "366px",
};

const center = {
  lat: 31.21405130266879,
  lng: 29.96070451527003,
};
function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDDbeB2JCI9I77iwI6SdzeHpcq2bx0qeQE",
  });
  if (!isLoaded) {
    return <div className="min-h-[400px] h-[400px] place-content-center">Loading...</div>;
  }
  return (
    <div className="pb-7 border-b min-h[400px] border-grayMedium/20 mb-10">
      <h2 className="  text-[24px] mb-4">How to receive this item</h2>
      <div className=" rounded-2xl overflow-hidden shadow-md mb-6">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        ></GoogleMap>
      </div>
      <h3 className="  text-[24px] mb-3">
        Northamptonshire, England, United Kingdom
      </h3>
      <p className=" ">
        This item is available for delivery or pickup, Click rent this item then
        choose your prefered option between delivery and pickup
      </p>
    </div>
  );
}

export default Map;
