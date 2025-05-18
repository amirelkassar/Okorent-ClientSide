"use client";
import React, { useRef, useEffect, useState } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import { fromLonLat, toLonLat } from "ol/proj";
import { Fill, Stroke, Style, Icon } from "ol/style";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import Circle from "ol/geom/Circle";
import Feature from "ol/Feature";
import MarkerIcon from "@/src/assets/images/location.png";
import Point from "ol/geom/Point";
import { Slider } from "@mantine/core";
import { fetchLocationDetails } from "../lib/utils";
import Button from "./button";

interface MapOlProps {
  onConfirm?: (locationData: {
    location: number[];
    radius: number;
    address?: string;
  }) => void;
}

const MapOl: React.FC<MapOlProps> = ({ onConfirm }) => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<number[]>([]);
  const [radius, setRadius] = useState<number>(500);
  const [locationDetails, setLocationDetails] = useState<any>(null);

  useEffect(() => {
    if (selectedLocation.length > 0) {
      fetchLocationDetails(selectedLocation[1], selectedLocation[0])
        .then((details) => {
          console.log(details);
          setLocationDetails(details);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedLocation]);

  useEffect(() => {
    const initializeMap = (center: number[]) => {
      const initialView = new View({
        center: fromLonLat(center),
        zoom: 12,
      });

      if (!mapRef.current && mapElement.current) {
        mapRef.current = new Map({
          target: mapElement.current,
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
          view: initialView,
        });

        mapRef.current.on("singleclick", function (evt) {
          const coords = toLonLat(evt.coordinate);
          setSelectedLocation(coords);
        });
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = [
            position.coords.longitude,
            position.coords.latitude,
          ];
          setSelectedLocation(userLocation);
          initializeMap(userLocation);
        },
        (error) => {
          console.error("Geolocation error:", error);
          initializeMap([31.2357, 30.0444]); // Fallback to Cairo, Egypt
        }
      );
    } else {
      console.warn("Geolocation is not available in this browser.");
      initializeMap([31.2357, 30.0444]); // Fallback to Cairo, Egypt
    }
  }, []);

  useEffect(() => {
    if (selectedLocation.length > 0 && mapRef.current) {
      const iconFeature: Feature<Point> = new Feature({
        geometry: new Point(fromLonLat(selectedLocation)),
      });
      const iconStyle = new Style({
        image: new Icon({
          src: MarkerIcon.src,
          scale: 1,
        }),
      });
      const circleGeometry = new Circle(fromLonLat(selectedLocation), radius);
      const circleFeature = new Feature(circleGeometry);
      const circleStyle = new Style({
        fill: new Fill({
          color: "#88ba5247",
        }),
        stroke: new Stroke({
          color: "#88ba5247",
          width: radius / 50,
        }),
      });
      circleFeature.setStyle(circleStyle);
      iconFeature.setStyle(iconStyle);
      const vectorSource = new VectorSource({
        features: [iconFeature, circleFeature],
      });
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });
      mapRef.current.getLayers().forEach((layer) => {
        if (layer instanceof VectorLayer) {
          mapRef.current?.removeLayer(layer);
        }
      });
      mapRef.current.addLayer(vectorLayer);
      mapRef.current
        .getView()
        .animate({ center: fromLonLat(selectedLocation), duration: 1000 });
    }
  }, [selectedLocation, radius]);

  const handleConfirm = () => {
    if (onConfirm && selectedLocation.length > 0) {
      onConfirm({
        location: selectedLocation,
        radius,
        address: locationDetails?.address,
      });
    }
  };

  return (
    <div>
      <div
        ref={mapElement}
        className="w-full h-[330px] rounded-2xl overflow-hidden "
      />
      {selectedLocation.length > 0 && (
        <>
          <div className="flex items-center justify-center mt-7 mb-1 md:mb-8">
            <span
              className=" cursor-pointer text-xl leading-4 place-content-center flex items-center justify-center"
              onClick={() => {
                setRadius(Math.max(500, radius - 100));
              }}
            >
              -
            </span>
            <Slider
              value={radius}
              onChange={setRadius}
              color="#88BA52"
              min={500}
              max={5000}
              step={100}
              size="xs"
              radius="md"
              className="mx-4"
              style={{ width: 380 }}
            />
            <span
              className="cursor-pointer text-xl leading-4 place-content-center flex items-center justify-center"
              onClick={() => {
                setRadius(Math.min(5000, radius + 100));
              }}
            >
              +
            </span>
          </div>

          {locationDetails && (
            <div className="text-center text-sm text-grayMedium mb-4">
              {locationDetails.address}
            </div>
          )}

          <div className="flex justify-center mb-4 md:mb-8">
            <Button onClick={handleConfirm} className="h-12 px-10">
              Confirm Location
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MapOl;
