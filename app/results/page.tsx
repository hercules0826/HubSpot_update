"use client";
import { useEffect, useState } from "react";
import CommunityCard from "./components/CommunityCard";
import MapView from "./components/MapView";

export default function ResultsPage() {
  const [communities, setCommunities] = useState<any[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  localStorage.setItem("sageResults", JSON.stringify([
    {
      id: 1,
      properties: { name: "Brookdale Marlton Crossing", city: "Cherry Hill", state: "NJ" },
      lat: 39.893715,
      lng: -74.959640
    },
    {
      id: 2,
      properties: { name: "Brightview Senior Living", city: "Cherry Hill", state: "NJ" },
      lat: 39.91020,
      lng: -75.0089
    },
    {
      id: 3,
      properties: { name: "Sunrise of Cherry Hill", city: "Cherry Hill", state: "NJ" },
      lat: 39.9151,
      lng: -75.0154
    }
  ]));

  useEffect(() => {
    const stored = localStorage.getItem("sageResults") ||
      localStorage.getItem("sage_search_results");

    if (stored) {
      const data = JSON.parse(stored);
      const mapped = data.map((r: any) => ({
        id: r.id,
        name: r.properties?.name,
        address: `${r.properties?.city || "Cherry Hill"}, ${r.properties?.state || ""}`,
        careLevel: "Assisted Living",
        priceRange: "$4,000 – $6,000",
        whyRecommended: "Matches your budget & location preferences.",
        image: "/images/care.png",
        phone: "(555) 123-4567",
        lat: r.lat,
        lng: r.lng,
      }));

      setCommunities(mapped);
      setSelected(mapped[0].id); // ✅ default first
    }
  }, []);

  return (
    <main className="min-h-screen bg-beige p-6 lg:p-10">
      <h1 className="text-4xl font-heading text-sageGreen text-center mb-10">
        Recommended Communities
      </h1>

      {communities.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT — MAP */}
          <div className="h-[50vh] lg:h-[85vh] sticky top-24 rounded-2xl overflow-hidden shadow-md">
            <MapView communities={communities} selectedId={selected} />
          </div>

          {/* RIGHT — CARDS LIST */}
          <div className="flex flex-col gap-6 max-h-[85vh] overflow-y-auto pr-3">
            {communities.map((c) => (
              <div
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={`cursor-pointer transition-all ${
                  selected === c.id ? "scale-[1.02]" : "opacity-80 hover:opacity-100"
                }`}
              >
                <CommunityCard community={c} selected={selected === c.id} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-grayText">Loading communities...</p>
      )}
    </main>
  );
}
