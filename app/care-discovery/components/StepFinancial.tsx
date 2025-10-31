"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StepFinancial({ prev }: { prev: () => void }) {
  const [budgetAwareness, setBudgetAwareness] = useState<string | null>(null);
  const [monthlyRange, setMonthlyRange] = useState<string | null>(null);
  const [fundingSources, setFundingSources] = useState<string[]>([]);
  const [concernLevel, setConcernLevel] = useState<string>("OK");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleFunding = (item: string) => {
    if (loading) return; // prevent clicking during loading
    setFundingSources((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const family = {
        firstName: "Emily",
        lastName: "Carter",
        email: "emily@example.com",
        phone: "+16175551212",
      };

      const locationQuery = "Cherry Hill";

      const res = await fetch("/api/hubspot/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ family, query: locationQuery }),
      });

      const data = await res.json();
      // console.log(data)
      if (data.ok) {
        localStorage.setItem("sageResults", JSON.stringify(data.top3));
        router.replace("/results");
      } else {
        alert("Submission failed: " + data.error);
      }
    } catch (e) {
      console.error(e);
      alert("An error occurred submitting your form.");
    } finally {
      setLoading(false);
    }
  };

  const lockClass = loading ? "pointer-events-none opacity-60" : "";

  return (
    <div className="relative">
      {/* UI content */}
      <motion.div
        className={`space-y-8 ${lockClass}`}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-heading text-sageGreen">
          Financial & Budget Awareness
        </h2>
        <p className="text-grayText">
          This helps us find communities that match both your care and financial comfort level.
        </p>

        {/* Budget Awareness */}
        <div>
          <h3 className="font-heading text-lg text-sageGreen mb-3">
            Are you aware of your monthly care budget?
          </h3>
          <div className="flex flex-wrap gap-4">
            {["Yes", "No"].map((opt) => (
              <button
                key={opt}
                onClick={() => setBudgetAwareness(opt)}
                disabled={loading}
                className={`px-6 py-3 rounded-2xl border-2 transition-all ${
                  budgetAwareness === opt
                    ? "bg-sageGreen text-white border-sageGreen shadow-md"
                    : "border-sageMint text-sageGreen hover:bg-sageMint/60"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Monthly Range */}
        <div>
          <h3 className="font-heading text-lg text-sageGreen mb-3">
            Monthly Budget Range
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Under $2,500",
              "$2,500 – $5,000",
              "$5,000 – $7,500",
              "$7,500 – $10,000",
              "$10,000+",
            ].map((opt) => (
              <button
                key={opt}
                onClick={() => setMonthlyRange(opt)}
                disabled={loading}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  monthlyRange === opt
                    ? "bg-sageGreen text-white border-sageGreen shadow-md"
                    : "border-sageMint text-sageGreen hover:bg-sageMint/60"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Funding Sources */}
        <div>
          <h3 className="font-heading text-lg text-sageGreen mb-3">
            What are your main funding sources?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Private Savings",
              "Home Sale",
              "Long-Term Care Insurance",
              "VA Benefits",
              "Medicaid",
            ].map((opt) => (
              <button
                key={opt}
                onClick={() => toggleFunding(opt)}
                disabled={loading}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  fundingSources.includes(opt)
                    ? "bg-sageGreen text-white border-sageGreen shadow-md"
                    : "border-sageMint text-sageGreen hover:bg-sageMint/60"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Concern */}
        <div>
          <h3 className="font-heading text-lg text-sageGreen mb-3">
            How concerned are you about financial costs?
          </h3>
          <div className="flex flex-wrap gap-4">
            {["Not worried", "OK", "Concerned", "Very concerned", "Don’t know"].map(
              (opt) => (
                <button
                  key={opt}
                  onClick={() => setConcernLevel(opt)}
                  disabled={loading}
                  className={`px-6 py-3 rounded-2xl border-2 transition-all ${
                    concernLevel === opt
                      ? "bg-sageGreen text-white border-sageGreen shadow-md"
                      : "border-sageMint text-sageGreen hover:bg-sageMint/60"
                  }`}
                >
                  {opt}
                </button>
              )
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <Button variant="secondary" onClick={prev} disabled={loading}>
            Back
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Searching..." : "Finish"}
          </Button>
        </div>
      </motion.div>

      {/* Overlay when loading */}
      {loading && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm rounded-xl">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center gap-3">
            <div className="loader border-4 border-sageMint border-t-sageGreen w-10 h-10 rounded-full animate-spin"></div>
            <p className="text-sageGreen font-medium">Finding top matches...</p>
          </div>
        </div>
      )}
    </div>
  );
}
