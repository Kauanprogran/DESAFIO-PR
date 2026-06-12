"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import "leaflet/dist/leaflet.css";

const ORIGIN = { lat: -25.479, lng: -53.617, name: "Base Help Pet" };
const DESTINATION = { lat: -25.37, lng: -53.58, name: "Rua das Flores, 123" };
const ANIMATION_MS = 12000;

export default function RotaAnimada() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const vanMarkerRef = useRef<any>(null);
  const vanGlowRef = useRef<any>(null);
  const animFrameRef = useRef<number>(0);
  const phaseIndexRef = useRef(0);
  const [status, setStatus] = useState<"idle" | "fetching" | "animating" | "arrived">("idle");
  const [routeData, setRouteData] = useState<{ distance: string; duration: string } | null>(null);
  const [phaseText, setPhaseText] = useState("Clique para simular a rota da van até você");

  useEffect(() => {
    if (typeof window === "undefined" || mapInstanceRef.current) return;
    if (!mapRef.current) return;

    const L = require("leaflet") as any;
    const map = L.map(mapRef.current, {
      center: [-25.42, -53.58],
      zoom: 11,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "",
      maxZoom: 18,
    }).addTo(map);

    L.circleMarker([ORIGIN.lat, ORIGIN.lng], {
      radius: 10, fillColor: "#22C55E", color: "#16A34A", weight: 2, fillOpacity: 0.8,
    }).addTo(map).bindTooltip("🏁 " + ORIGIN.name, {
      direction: "top", offset: L.point(0, -10),
      className: "!bg-green-900 !text-white !border-0 !rounded-lg !px-3 !py-1 !text-sm !font-medium !shadow-lg",
    });

    L.circleMarker([DESTINATION.lat, DESTINATION.lng], {
      radius: 10, fillColor: "#EF4444", color: "#DC2626", weight: 2, fillOpacity: 0.8,
    }).addTo(map).bindTooltip("📍 " + DESTINATION.name, {
      direction: "top", offset: L.point(0, -10),
      className: "!bg-red-900 !text-white !border-0 !rounded-lg !px-3 !py-1 !text-sm !font-medium !shadow-lg",
    });

    const glow = L.circleMarker([ORIGIN.lat, ORIGIN.lng], {
      radius: 18, fillColor: "#7C3AED", color: "transparent", weight: 0, fillOpacity: 0.15,
    }).addTo(map);
    vanGlowRef.current = glow;

    const van = L.circleMarker([ORIGIN.lat, ORIGIN.lng], {
      radius: 9, fillColor: "#7C3AED", color: "#C4B5FD", weight: 3, fillOpacity: 1,
    }).addTo(map);
    van.bindTooltip("🚐 Van Help Pet", {
      direction: "top", offset: L.point(0, -14),
      className: "!bg-purple-900 !text-white !border-0 !rounded-lg !px-3 !py-1 !text-sm !font-medium !shadow-lg",
    });
    vanMarkerRef.current = van;

    const bounds = L.latLngBounds([ORIGIN.lat, ORIGIN.lng], [DESTINATION.lat, DESTINATION.lng]);
    map.fitBounds(bounds, { padding: [60, 60] });
    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const resetAnimation = useCallback(() => {
    if (animFrameRef.current) { cancelAnimationFrame(animFrameRef.current); animFrameRef.current = 0; }
    const map = mapInstanceRef.current;
    if (map) {
      map.eachLayer((layer: any) => {
        try { if (layer instanceof (require("leaflet") as any).Polyline) layer.remove(); } catch {}
      });
    }
    if (vanMarkerRef.current) {
      vanMarkerRef.current.setLatLng([ORIGIN.lat, ORIGIN.lng]);
      vanMarkerRef.current.setStyle({ radius: 9, fillColor: "#7C3AED", color: "#C4B5FD" });
    }
    if (vanGlowRef.current) {
      vanGlowRef.current.setLatLng([ORIGIN.lat, ORIGIN.lng]);
      vanGlowRef.current.setStyle({ radius: 18, fillOpacity: 0.15 });
    }
    if (map) {
      const L = require("leaflet") as any;
      map.fitBounds(L.latLngBounds([ORIGIN.lat, ORIGIN.lng], [DESTINATION.lat, DESTINATION.lng]), { padding: [60, 60] });
    }
    setStatus("idle");
    setRouteData(null);
    setPhaseText("Clique para simular a rota da van até você");
    phaseIndexRef.current = 0;
  }, []);

  const startAnimation = useCallback(async () => {
    if (status !== "idle") return;
    setStatus("fetching");
    setPhaseText("Calculando rota...");

    let coords: [number, number][];
    let fallback = false;

    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${ORIGIN.lng},${ORIGIN.lat};${DESTINATION.lng},${DESTINATION.lat}?geometries=geojson&overview=full`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.code === "Ok" && data.routes.length > 0) {
        const route = data.routes[0];
        coords = route.geometry.coordinates.map((c: number[]) => [c[1], c[0]]);
        const dist = (route.distance / 1000).toFixed(1);
        const dur = Math.round(route.duration / 60);
        setRouteData({ distance: `${dist} km`, duration: `${dur} min` });
      } else {
        throw new Error("No route");
      }
    } catch {
      coords = [];
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        coords.push([
          ORIGIN.lat + (DESTINATION.lat - ORIGIN.lat) * t,
          ORIGIN.lng + (DESTINATION.lng - ORIGIN.lng) * t,
        ]);
      }
      fallback = true;
    }

    if (!routeData && fallback) {
      setRouteData({ distance: "~28 km", duration: "~30 min" });
    }

    animateVan(coords);
  }, [status, routeData]);

  function animateVan(coords: [number, number][]) {
    const map = mapInstanceRef.current;
    if (!map) return;
    const L = require("leaflet") as any;

    const dimPoly = L.polyline(coords, {
      color: "#8B5CF6", weight: 4, opacity: 0.15, dashArray: "8, 8",
    }).addTo(map);

    const activePoly = L.polyline([], {
      color: "#8B5CF6", weight: 4, opacity: 0.9,
    }).addTo(map);

    map.fitBounds(dimPoly.getBounds(), { padding: [60, 60] });

    setStatus("animating");
    phaseIndexRef.current = 0;
    const startTime = performance.now();
    const total = coords.length;

    function frame(now: number) {
      const rawProgress = (now - startTime) / ANIMATION_MS;
      const progress = Math.min(rawProgress, 1);
      const idx = Math.min(Math.floor(progress * (total - 1)), total - 1);
      const pos = coords[idx];

      vanMarkerRef.current?.setLatLng(pos);
      vanGlowRef.current?.setLatLng(pos);
      activePoly.setLatLngs(coords.slice(0, idx + 1));

      const pulseRadius = 9 + Math.sin(now / 150) * 2;
      const pulseOpacity = 0.12 + Math.sin(now / 150) * 0.06;
      vanMarkerRef.current?.setStyle({ radius: pulseRadius });
      vanGlowRef.current?.setStyle({ radius: pulseRadius * 2.2, fillOpacity: pulseOpacity });

      const newPhase = progress < 0.25 ? 0 : progress < 0.6 ? 1 : progress < 0.92 ? 2 : 3;
      if (newPhase !== phaseIndexRef.current) {
        phaseIndexRef.current = newPhase;
        const texts = [
          "🚐 Saindo da base...",
          "🚐 Van a caminho...",
          "🚐 Quase chegando...",
          "🎉 A van chegou!",
        ];
        setPhaseText(texts[newPhase]);
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(frame);
      } else {
        setStatus("arrived");
        dimPoly.setStyle({ opacity: 0.3, dashArray: "" });
        activePoly.setStyle({ opacity: 1 });
        vanMarkerRef.current?.setStyle({ radius: 12, fillColor: "#22C55E", color: "#16A34A" });
        vanGlowRef.current?.setStyle({ radius: 24, fillColor: "#22C55E", fillOpacity: 0.2 });
        setPhaseText("🎉 A van chegou ao destino!");
      }
    }

    animFrameRef.current = requestAnimationFrame(frame);
  }

  return (
    <div>
      <div className="relative w-full h-[280px] md:h-[350px] rounded-2xl overflow-hidden border border-purple-500/20 mb-6">
        <div ref={mapRef} className="w-full h-full" />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-purple-200/80 text-sm mb-1">
            <span className={`w-2 h-2 rounded-full ${
              status === "idle" ? "bg-purple-400" :
              status === "fetching" ? "bg-yellow-400 animate-pulse" :
              status === "animating" ? "bg-purple-400 animate-pulse" :
              "bg-green-400"
            }`} />
            {phaseText}
          </div>
          {routeData && (
            <div className="flex gap-4 text-xs text-purple-300/50">
              <span>📏 {routeData.distance}</span>
              <span>⏱️ {routeData.duration}</span>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          {status === "idle" && (
            <button
              onClick={startAnimation}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
            >
              🚐 Iniciar simulação
            </button>
          )}
          {(status === "animating" || status === "arrived") && (
            <button
              onClick={resetAnimation}
              className="px-5 py-2.5 text-sm font-semibold text-purple-200 bg-white/10 hover:bg-white/20 border border-purple-400/30 rounded-lg transition-colors"
            >
              {status === "animating" ? "⏹️ Parar" : "🔄 Simular novamente"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
