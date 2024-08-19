import React, { ChangeEvent, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Button from "@/src/components/button";
import LocationIcon from "@/src/assets/icons/location";
const containerStyle = {
  width: "640px",
  height: "390px",
};

const center = {
  lat: 31.21405130266879,
  lng: 29.96070451527003,
};
interface GoogleMapProps {
  index?: any;
  handleInputChangeLocation: (
    index: number,
    value: string,
    name: string
  ) => void;
  close?: any;
}
function GoogleMapLoc({
  close,
  index,
  handleInputChangeLocation,
}: GoogleMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDDbeB2JCI9I77iwI6SdzeHpcq2bx0qeQE",
  });
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [placeName, setPlaceName] = useState<string>(""); // Store place name

  // Function to fetch place name from lat/lng
  const fetchPlaceName = async (lat: number, lng: number) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDDbeB2JCI9I77iwI6SdzeHpcq2bx0qeQE`
    );
    const data = await response.json();
    if (data.results && data.results[0]) {
      const place = data.results[0];
      const name = place.formatted_address || ""; // Store formatted address as place name
      setPlaceName(name);
      {
        handleInputChangeLocation &&
          handleInputChangeLocation(index, name, "address");
      }
    }
  };

  // Callback when the user clicks on the map
  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setSelectedLocation({ lat, lng });
      fetchPlaceName(lat, lng); // Fetch and store place name
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" max-w-[640px] h-[390px] relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onClick={onMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>

      <div className=" absolute bottom-3 left-[50%] -translate-x-2/4 bg-white max-w-[80%] w-[286px] rounded-2xl py-3 px-6">
        <div className=" mb-3    flex justify-center items-center gap-[2px]">
          <LocationIcon
            fill="#0F2A43"
            className={"min-w-[10px] h-auto w-[10px]"}
          />
          <h3 className="  truncate text-[12px]  text-grayMedium">
            {placeName || "--"}
          </h3>
        </div>

        <Button onClick={close} className={"w-full"}>
          Select this location
        </Button>
      </div>
    </div>
  );
}

export default GoogleMapLoc;
