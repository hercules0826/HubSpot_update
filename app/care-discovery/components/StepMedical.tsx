"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function StepMedical({
  next,
  prev,
}: {
  next: () => void;
  prev: () => void;
}) {
  const [careNeeds, setCareNeeds] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<string>("Moderate");
  const [specialNeeds, setSpecialNeeds] = useState<string[]>([]);

  const toggle = (state: string[], setter: any, item: string) => {
    setter(state.includes(item) ? state.filter((x) => x !== item) : [...state, item]);
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
        Medical Needs & Care Complexity
      </h2>
      <p className="text-grayText">
        Help us understand the care level and support your loved one may need.
      </p>

      {/* Primary Care Needs */}
      <div>
        <h3 className="font-heading text-lg text-sageGreen mb-3">
          Primary Care Needs (choose up to 2)
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Independent Living",
            "Assisted Living",
            "Memory Care",
            "Skilled Nursing",
            "Ongoing Therapy",
          ].map((opt) => (
            <button
              key={opt}
              onClick={() => toggle(careNeeds, setCareNeeds, opt)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                careNeeds.includes(opt)
                  ? "bg-sageGreen text-white border-sageGreen shadow-md"
                  : "border-sageMint text-sageGreen hover:bg-sageMint/60"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Medical Complexity */}
      <div>
        <h3 className="font-heading text-lg text-sageGreen mb-3">
          Medical Complexity
        </h3>
        <div className="flex gap-4 flex-wrap">
          {["Low", "Moderate", "High"].map((opt) => (
            <button
              key={opt}
              onClick={() => setComplexity(opt)}
              className={`px-6 py-3 rounded-2xl border-2 transition-all ${
                complexity === opt
                  ? "bg-sageGreen text-white border-sageGreen shadow-md"
                  : "border-sageMint text-sageGreen hover:bg-sageMint/60"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Special Needs */}
      <div>
        <h3 className="font-heading text-lg text-sageGreen mb-3">
          Special Needs or Accessibility
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Wheelchair Accessible",
            "On-site Physician",
            "Hospital Nearby",
            "Hospice Support",
          ].map((opt) => (
            <button
              key={opt}
              onClick={() => toggle(specialNeeds, setSpecialNeeds, opt)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                specialNeeds.includes(opt)
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
        <Button onClick={next}>Next</Button>
      </div>
    </motion.div>
  );
}
