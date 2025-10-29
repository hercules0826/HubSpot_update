// ...StepSocial component...
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function StepSocial({
  next,
  prev,
}: {
  next: () => void;
  prev: () => void;
}) {
  const [environment, setEnvironment] = useState<string | null>(null);
  const [lifestyle, setLifestyle] = useState<string[]>([]);
  const [comfort, setComfort] = useState<number>(3);

  const toggleLifestyle = (item: string) => {
    setLifestyle((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
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
        Social & Lifestyle Preferences
      </h2>
      <p className="text-grayText">
        Every community has its own rhythm. Tell us what kind of environment
        your loved one feels happiest in.
      </p>

      {/* Preferred Environment */}
      <div>
        <h3 className="font-heading text-lg text-sageGreen mb-3">
          Preferred Environment
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {["Quiet / Private", "Active / Social", "Faith-Based", "Diverse & Inclusive"].map(
            (opt) => (
              <button
                key={opt}
                onClick={() => setEnvironment(opt)}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  environment === opt
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

      {/* Lifestyle Priorities */}
      <div>
        <h3 className="font-heading text-lg text-sageGreen mb-3">
          Top 3 Lifestyle Priorities
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Dining Experience",
            "Exercise & Wellness",
            "Creative Activities",
            "Outings & Trips",
            "Pet-Friendly",
            "Volunteer Opportunities",
          ].map((opt) => (
            <button
              key={opt}
              onClick={() => toggleLifestyle(opt)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                lifestyle.includes(opt)
                  ? "bg-sageGreen text-white border-sageGreen shadow-md"
                  : "border-sageMint text-sageGreen hover:bg-sageMint/60"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Social Comfort Slider */}
      <div>
        <h3 className="font-heading text-lg text-sageGreen mb-3">
          Social Engagement Comfort
        </h3>
        <input
          type="range"
          min="1"
          max="5"
          value={comfort}
          onChange={(e) => setComfort(Number(e.target.value))}
          className="w-full accent-sageGreen cursor-pointer"
        />
        <p className="mt-2 text-center text-sm text-grayText">
          {[
            "Prefers solitude",
            "Warms up with prompting",
            "Enjoys small groups",
            "Loves group activities",
            "Life of the party",
          ][comfort - 1]}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10">
        <Button variant="secondary" onClick={prev}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </div>
    </motion.div>
  );
}
