"use client";
import { useEffect, useRef } from "react";

export default function MapView({
  communities,
  selectedId
}: {
  communities: any[];
  selectedId: number | null;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (typeof window.google === "undefined") {
        setTimeout(loadGoogleMaps, 200);
        return;
      }
      initMap();
    };

    if (!document.getElementById("google-maps-sdk")) {
      const script = document.createElement("script");
      script.id = "google-maps-sdk";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = loadGoogleMaps;
      document.body.appendChild(script);
    } else {
      loadGoogleMaps();
    }

    function initMap() {
      if (!mapRef.current || mapInstance.current) return;

      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: communities[0].lat, lng: communities[0].lng },
        zoom: 12,
      });

      markersRef.current = communities.map((c) => {
        const marker = new window.google.maps.Marker({
          position: { lat: c.lat, lng: c.lng },
          map: mapInstance.current,
          title: c.name,
        });

        const info = new window.google.maps.InfoWindow({
          content: `<strong>${c.name}</strong><br>${c.address}`,
        });

        marker.addListener("click", () => info.open(mapInstance.current, marker));
        return { id: c.id, marker };
      });
    }
  }, [communities]);

  // ✅ Move map to selected marker smoothly
  useEffect(() => {
    if (!mapInstance.current || !selectedId) return;
    const selected = communities.find((c) => c.id === selectedId);
    if (!selected) return;

    mapInstance.current.panTo({ lat: selected.lat, lng: selected.lng });
    mapInstance.current.setZoom(13);
  }, [selectedId]);

  return <div ref={mapRef} className="w-full h-full rounded-2xl shadow-md" />;
}
