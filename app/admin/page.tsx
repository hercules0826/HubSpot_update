// ...admin main page...
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AddListingModal from "./components/AddListingModal";
import ListingTable from "./components/ListingTable";
import StatsOverview from "./components/StatsOverview";
import { Button } from "@/components/Button";

export default function AdminPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-beige min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-heading text-sageGreen">Admin Dashboard</h1>
          <Button onClick={() => setOpen(true)}>+ Add New Listing</Button>
        </div>

        <StatsOverview />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <ListingTable />
        </motion.div>

        {open && <AddListingModal onClose={() => setOpen(false)} />}
      </div>
    </main>
  );
}
