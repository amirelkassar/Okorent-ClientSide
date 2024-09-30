import React, { ChangeEvent, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Button from "@/src/components/button";
import LocationIcon from "@/src/assets/icons/location";
import { TextInput } from "@mantine/core";
import SearchIcon from "../assets/icons/search";
const containerStyle = {
  width: "100%",
  height: "390px",
};
const center = {
  lat: 31.21405130266879,
  lng: 29.96070451527003,
};
interface GoogleMapProps {
  index?: number;
  handleInputChangeLocation?: (index: number, value: string, name: string) => void;
  close?: any;
  setLocation?:React.Dispatch<React.SetStateAction<string>>
}

function GoogleMapLoc({
  close,
  index,
  handleInputChangeLocation,
  setLocation
}: GoogleMapProps) {

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCdBmOtAFzrgkikmCDsk_lb0z2EU_eYSbY",
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
      setLocation&&setLocation(name)
      setPlaceName(name);

      if (handleInputChangeLocation&&index) {
        console.log(index, name, 'address');
        
        handleInputChangeLocation(index, name, 'address');
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
    <div className=" max-w-[640px] h-auto min-h-[360px] relative">
      <div className="flex-1 flex p-[1px] rounded-2xl h-11 lg:h-[66px] mb-3 lg:mb-6 border-2 lg:border-[3px] border-green/30 lg:ps-6 bg-white overflow-hidden">
        <SearchIcon className={"w-[18px] h-auto hidden lg:block"} fill="#0F2A43" />
        <TextInput
          placeholder="What are you looking to rent today?"
          type="text"
          classNames={{
            input:
              "flex-1  bg-white text-black h-full border-none px-3 lg:px-5 text-[12px] lg:text-[16px] font-Medium",
            wrapper: "h-full",
          }}
          className="flex-1  text-grayMedium h-full text-[16px]"
        />
        <button className="h-full w-[78px] rounded-e-xl border-[3px] bg-green border-[#a9c788] hover:border-green duration-500 flex items-center justify-center">
          <SearchIcon className={"w-4 lg:w-[26px] h-auto"} />
        </button>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onClick={onMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>

      <div className=" absolute bottom-3 left-[50%] -translate-x-2/4 bg-white max-w-[80%] border border-green shadow-md w-[286px] rounded-2xl py-3 px-6">
        <div className=" mb-3    flex justify-center items-center gap-[2px]">
          <LocationIcon
            fill="#0F2A43"
            className={"min-w-[10px] h-auto w-[10px]"}
          />
          <h3 className="  truncate text-[12px]  text-grayMedium">
            {placeName || "--"}
          </h3>
        </div>

        <Button onClick={close} className={"w-full text-sm lg:text-base h-10 lg:h-[50px]"}>
          Select this location
        </Button>
      </div>
    </div>
  );
}

export default GoogleMapLoc;
