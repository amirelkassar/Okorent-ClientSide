"use client";
import {
  GoogleMap,
  useJsApiLoader,
  Circle,
  Marker,
} from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { Slider } from "@mantine/core";

interface LatLng {
  lat: number;
  lng: number;
}

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 31.21405130266879,
  lng: 29.96070451527003,
};

const MapWithCircle: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDDbeB2JCI9I77iwI6SdzeHpcq2bx0qeQE",
  });

  const [radius, setRadius] = useState<number>(1000);
  const [circleCenter, setCircleCenter] = useState<LatLng | null>(null); // الحالة للموقع الحالي

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    setCircleCenter(null);
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      // تحديث موقع الدائرة الجديدة
      setCircleCenter({ lat, lng });
      console.log(lat, lng);
      
    }
  }, []);
  const CircleMap = ({ circleCenter }: any) => {
    if (circleCenter) {
      return (
        <Circle
          center={circleCenter}
          radius={radius}
          visible
          draggable
          options={{
            strokeColor: "#00FF00",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#00FF00",
            fillOpacity: 0.35,
          }}
        />
      );
    }
  };
  return isLoaded ? (
    <div>
      {/* Google Map */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onClick={onMapClick}
      >
        {circleCenter && (
          <>
            <Marker position={circleCenter} />
            <Circle
              center={circleCenter}
              radius={radius}
              visible
              draggable={false}
              onClick={onMapClick}
              options={{
                strokeColor: "#00FF00",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#00FF00",
                fillOpacity: 0.35,
              }}
            />
          </>
        )}
      </GoogleMap>

      {/* Slider to control the radius */}
      <Slider
        value={radius}
        onChange={setRadius}
        min={100}
        max={5000}
        step={100}
        label={(value) => `${value} meters`}
        style={{ marginTop: "20px" }}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MapWithCircle;
