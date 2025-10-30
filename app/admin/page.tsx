"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AddListingModal from "./components/AddListingModal";
import EditListingModal from "./components/EditListingModal";
import ListingTable from "./components/ListingTable";
import StatsOverview from "./components/StatsOverview";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import FAQPoliciesManager from "./components/FAQPolicesManager";
import { Button } from "@/components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [openAdd, setOpenAdd] = useState(false);
  const [editListing, setEditListing] = useState<any | null>(null);
  const [listings, setListings] = useState<any[]>([]);
  const { data: session, status } = useSession();
  const router = useRouter();

  // Fetch data dynamically from backend (HubSpot / local API)
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch("/api/communities", { cache: "no-store" });
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error("Failed to fetch listings:", err);
      }
    };
    fetchListings();
  }, []);

  if (status === "loading")
    return <p className="text-center mt-10 text-sageGreen">Loading...</p>;

  if (!session || !session.user || (session.user as any).role !== "admin") {
    if (typeof window !== "undefined") router.replace("/login");
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-semibold mb-3 text-sageGreen">
          Unauthorized Access
        </h2>
        <p className="text-grayText max-w-md">
          Please log in as an admin to access the management dashboard.
        </p>
      </div>
    );
  }

  return (
    <main className="bg-gradient-to-b from-beige via-white to-beige min-h-screen py-14 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-heading text-sageGreen">
              Admin Dashboard
            </h1>
            <p className="text-grayText text-sm mt-1">
              Manage listings, monitor performance, and maintain platform data.
            </p>
          </div>
          <Button
            onClick={() => setOpenAdd(true)}
            className="bg-sageGreen text-white hover:bg-sageHover shadow-lg rounded-xl px-6 py-3"
          >
            + Add New Listing
          </Button>
        </motion.div>

        {/* Overview + Analytics */}
        <StatsOverview />
        <AnalyticsDashboard />
        <FAQPoliciesManager />

        {/* Dynamic Listings Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <ListingTable
            listings={listings}
            onEdit={setEditListing}
            onRefresh={() => {
              fetch("/api/communities")
                .then((res) => res.json())
                .then(setListings);
            }}
          />
        </motion.div>

        {/* Modals */}
        {openAdd && (
          <AddListingModal
            onClose={() => setOpenAdd(false)}
            onAdded={() => {
              setOpenAdd(false);
              location.reload();
            }}
          />
        )}
        {editListing && (
          <EditListingModal
            listing={editListing}
            onClose={() => setEditListing(null)}
            onUpdated={() => {
              setEditListing(null);
              location.reload();
            }}
          />
        )}
      </div>
    </main>
  );
}
