"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AddListingModal from "./components/AddListingModal";
import EditListingModal from "./components/EditListingModal";
import ListingTable from "./components/ListingTable";
import StatsOverview from "./components/StatsOverview";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import { Button } from "@/components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FAQPoliciesManager from "./components/FAQPolicesManager";

export default function AdminPage() {
  const [openAdd, setOpenAdd] = useState(false);
  const [editListing, setEditListing] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;

  if (!session || !session.user || (session.user as any).role !== "admin") {
    if (typeof window !== "undefined") router.replace("/login");
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold mb-4">Unauthorized</h2>
        <p>Please log in as an admin to access the dashboard.</p>
      </div>
    );
  }

  return (
    <main className="bg-beige min-h-screen py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-heading text-sageGreen">
            Admin Dashboard
          </h1>
          <Button onClick={() => setOpenAdd(true)}>+ Add New Listing</Button>
        </div>

        <StatsOverview />
        <AnalyticsDashboard />
        <FAQPoliciesManager />

        {/* Listings Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <ListingTable onEdit={setEditListing} />
        </motion.div>

        {openAdd && <AddListingModal onClose={() => setOpenAdd(false)} />}
        {editListing && (
          <EditListingModal
            listing={editListing}
            onClose={() => setEditListing(null)}
          />
        )}
      </div>
    </main>
  );
}
