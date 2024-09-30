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
import MarkerIcon from "@/src/assets/images/location.png"; // Import your custom marker icon
import Point from "ol/geom/Point";
import { Slider } from "@mantine/core";

const MapOl: React.FC = () => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null); // Store the map instance
  const [selectedLocation, setSelectedLocation] = useState<number[]>([]); // Stores selected location [lon, lat]
  const [radius, setRadius] = useState<number>(500); // Default radius in meters
  console.log(selectedLocation);
  console.log(radius);

  useEffect(() => {
    if (!mapRef.current && mapElement.current) {
      const initialView = new View({
        center: fromLonLat([31.2357, 30.0444]), // Default center (Cairo coordinates)
        zoom: 12,
      });

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
        const coords = toLonLat(evt.coordinate); // Convert clicked coordinates to longitude/latitude
        setSelectedLocation(coords); // Update the selected location state
      });
    }
  }, []);

  useEffect(() => {
    if (selectedLocation.length > 0 && mapRef.current) {
      // Create a new marker/icon feature at the selected location
      const iconFeature: Feature<Point> = new Feature({
        geometry: new Point(fromLonLat(selectedLocation)),
      });

      const iconStyle = new Style({
        image: new Icon({
          src: MarkerIcon.src, // Use MarkerIcon.src for the image URL
          scale: 1, // Adjust the scale as needed
        }),
      });
      const circleGeometry = new Circle(fromLonLat(selectedLocation), radius); // Create circle geometry
      const circleFeature = new Feature(circleGeometry); // Create feature from geometry

      // Create a circle style for the selected area
      const circleStyle = new Style({
        fill: new Fill({
          color: "#88ba5247", // Green with some transparency
        }),
        stroke: new Stroke({
          color: "#88ba5247",
          width: radius / 50,
        }),
      });

      // Add the circle feature to the vector source
      circleFeature.setStyle(circleStyle);

      iconFeature.setStyle(iconStyle);

      // Vector source and layer to hold the icon
      const vectorSource = new VectorSource({
        features: [iconFeature, circleFeature],
      });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      // Remove any existing vector layers
      mapRef.current.getLayers().forEach((layer) => {
        if (layer instanceof VectorLayer) {
          mapRef.current?.removeLayer(layer);
        }
      });

      // Add the vector layer to the map
      mapRef.current.addLayer(vectorLayer);

      // Pan to the selected location
      mapRef.current
        .getView()
        .animate({ center: fromLonLat(selectedLocation), duration: 1000 });

      // Create a circle geometry for the selected area
      // Add circle feature to the same vector source
    }
  }, [selectedLocation, radius]);

  const zoomIn = () => {
    const view = mapRef.current?.getView();
    if (view) {
      view.setZoom(view.getZoom()! + 1);
    }
  };

  const zoomOut = () => {
    const view = mapRef.current?.getView();
    if (view) {
      view.setZoom(view.getZoom()! - 1);
    }
  };

  const updateRadius = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRadius = Number(event.target.value);
    setRadius(newRadius);
  };

  return (
    <div>
      <div
        ref={mapElement}
        style={{ width: "100%", height: "500px", borderRadius: "12px" }}
      />
      {selectedLocation.length > 0 && (
        <div className="flex items-center justify-start mt-4">
          <span className="mr-2">-</span>
          <Slider
            value={radius}
            onChange={setRadius}
            color="#88BA52"
            min={500}
            max={5000}
            step={100}
            size="md"
            radius="md"
            className="mx-4"
            style={{ width: 380 }}
          />
          <span className="ml-2">+</span>
        </div>
      )}
    </div>
  );
};

export default MapOl;
