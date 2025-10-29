// ...StepFinancial component...
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function StepFinancial({
  prev,
}: {
  prev: () => void;
}) {
  const [budgetAwareness, setBudgetAwareness] = useState<string | null>(null);
  const [monthlyRange, setMonthlyRange] = useState<string | null>(null);
  const [fundingSources, setFundingSources] = useState<string[]>([]);
  const [concernLevel, setConcernLevel] = useState<string>("OK");

  const toggleFunding = (item: string) => {
    setFundingSources((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleSubmit = () => {
    alert("Form submitted! (Next: integrate HubSpot API)");
  };

  return (
    <motion.div
      className="space-y-8"
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

      {/* Financial Concern */}
      <div>
        <h3 className="font-heading text-lg text-sageGreen mb-3">
          How concerned are you about financial costs?
        </h3>
        <div className="flex flex-wrap gap-4">
          {["Not worried", "OK", "Concerned", "Very concerned", "Don’t know"].map((opt) => (
            <button
              key={opt}
              onClick={() => setConcernLevel(opt)}
              className={`px-6 py-3 rounded-2xl border-2 transition-all ${
                concernLevel === opt
                  ? "bg-sageGreen text-white border-sageGreen shadow-md"
                  : "border-sageMint text-sageGreen hover:bg-sageMint/60"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <Button variant="secondary" onClick={prev}>
          Back
        </Button>
        <Button onClick={handleSubmit}>Finish</Button>
      </div>
    </motion.div>
  );
}
