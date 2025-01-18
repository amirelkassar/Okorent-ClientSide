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

const MapOl: React.FC = () => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<number[]>([]);
  const [radius, setRadius] = useState<number>(500);
  console.log(selectedLocation);
  useEffect(() => {
    // Example usage
    if (selectedLocation.length > 0) {
      fetchLocationDetails(selectedLocation[1], selectedLocation[0])
        .then((details) => console.log(details))
        .catch((error) => console.error(error));
    }
  }, [selectedLocation]);
  console.log(radius);
  useEffect(() => {
    if (!mapRef.current && mapElement.current) {
      const initialView = new View({
        center: fromLonLat([31.2357, 30.0444]),
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
        const coords = toLonLat(evt.coordinate);
        setSelectedLocation(coords);
      });
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

  return (
    <div>
      <div
        ref={mapElement}
        className="w-full h-[330px] rounded-2xl overflow-hidden "
      />
      {selectedLocation.length > 0 && (
        <div className="flex items-center justify-center mt-7 mb-1 md:mb-20">
          <span
            className=" cursor-pointer text-xl leading-4 place-content-center flex items-center justify-center"
            onClick={() => {
              setRadius(radius - 100);
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
              setRadius(radius + 100);
            }}
          >
            +
          </span>
        </div>
      )}
    </div>
  );
};

export default MapOl;
