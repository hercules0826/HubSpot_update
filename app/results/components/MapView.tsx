// ...MapView component...
"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY || "";

export default function MapView({ communities }: { communities: any[] }) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-75.0, 39.9], // Default NJ center
      zoom: 10,
    });

    communities.forEach((c) => {
      new mapboxgl.Marker({ color: "#2F5D50" })
        .setLngLat([c.lng, c.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<b>${c.name}</b><br>${c.address}`))
        .addTo(mapRef.current!);
    });

    return () => mapRef.current?.remove();
  }, [communities]);

  return <div ref={mapContainer} className="w-full h-full rounded-none" />;
}
