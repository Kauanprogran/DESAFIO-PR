"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const cities = [
  { name: "Curitiba", lat: -25.429, lng: -49.271, label: "📍 Sede" },
  { name: "Londrina", lat: -23.311, lng: -51.159, label: "📍 Cobertura" },
  { name: "Maringá", lat: -23.421, lng: -51.933, label: "📍 Cobertura" },
  { name: "Ponta Grossa", lat: -25.099, lng: -50.158, label: "📍 Cobertura" },
  { name: "Cascavel", lat: -24.956, lng: -53.459, label: "📍 Cobertura" },
  { name: "São José dos Pinhais", lat: -25.531, lng: -49.206, label: "📍 Cobertura" },
  { name: "Foz do Iguaçu", lat: -25.548, lng: -54.588, label: "📍 Cobertura" },
  { name: "Colombo", lat: -25.292, lng: -49.224, label: "📍 Cobertura" },
  { name: "Guarapuava", lat: -25.395, lng: -51.462, label: "📍 Cobertura" },
  { name: "Paranaguá", lat: -25.521, lng: -48.509, label: "📍 Cobertura" },
];

export default function ParanaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || mapInstanceRef.current) return;

    const L = require("leaflet") as any;

    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [-24.5, -51.5],
      zoom: 7.5,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "",
      maxZoom: 18,
    }).addTo(map);

    cities.forEach((city: any) => {
      const marker = L.circleMarker([city.lat, city.lng], {
        radius: 10,
        fillColor: "#7C3AED",
        color: "#5B21B6",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7,
      }).addTo(map);

      marker.bindTooltip(city.name, {
        permanent: false,
        direction: "top",
        offset: L.point(0, -10),
        className: "!bg-purple-900 !text-white !border-0 !rounded-lg !px-3 !py-1 !text-sm !font-medium !shadow-lg",
      });
    });

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-purple-100">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
