"use client";
import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM } from "ol/source";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";
import { Circle as CircleStyle, Fill, Stroke } from "ol/style";
import Overlay from "ol/Overlay";

const MapComponent = ({ stocks }: { stocks?: any[] }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null); // Allow Map or null
  // Points data
  const transformedData = stocks?.map((item: any) => ({
    lat: item.location.latitude,
    lon: item.location.longitude,
    label: item.name,
  }));
  const points = transformedData || [
    { lat: 24.9262, lon: 67.0226, label: "Vianden" },
    { lat: 24.9435, lon: 67.0822, label: "Remich" },
    { lat: 24.93, lon: 67.05, label: "Berdorf" },
  ];
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize the map
    const map = new Map({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([points[0].lon, points[0].lat]),
        zoom: 12,
      }),
    });

    // Store the map instance in the ref to avoid re-creating it
    mapRef.current = map;

    // Create a Vector source to hold points
    const vectorSource = new VectorSource();

    // Create overlays for each point
    points.forEach((point) => {
      const coordinate = fromLonLat([point.lon, point.lat]);

      // Create a point feature
      const feature = new Feature({
        geometry: new Point(coordinate),
      });

      // Add the feature to the vector source
      vectorSource.addFeature(feature);

      // Create an overlay for the label
      const labelElement = document.createElement("div");
      labelElement.className = "map-label";
      labelElement.innerHTML = `<span className="text-wrap ">${point.label}</span>`;

      const overlay = new Overlay({
        position: coordinate,
        positioning: "center-center",
        element: labelElement,
        stopEvent: false,
      });

      // Add the overlay to the map
      map.addOverlay(overlay);
    });

    // Create a vector layer for points
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new CircleStyle({
          radius: 10,
          fill: new Fill({ color: "#88BA52" }),
          stroke: new Stroke({ color: "#88BA524D", width: 14 }),
        }),
      }),
    });

    // Add vector layer to the map
    map.addLayer(vectorLayer);

    // Clean up on unmount
    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div>
      <div
        ref={mapContainerRef}
        className="w-full h-[366px] rounded-2xl mb-8 overflow-hidden"
      ></div>
      <div className="flex items-center gap-1 flex-wrap">
        {points.map((point, i) => {
          return (
            <p key={i} className="text-base lg:text-xl">
              {point.label},
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MapComponent;
