"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export default function StepPersonal({ next }: { next: () => void }) {
  const options = [
    "Safety & Security",
    "Staying Close to Family",
    "Maintaining Independence",
    "Comfort & Quality of Life",
    "Specialized Medical Care",
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (opt: string) => {
    if (selected.includes(opt)) {
      setSelected(selected.filter((o) => o !== opt));
    } else if (selected.length < 3) {
      setSelected([...selected, opt]);
    }
  };

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <h2 className="text-3xl font-heading text-sageGreen mb-3">
          Personal & Family Wishes
        </h2>
        <p className="text-grayText text-base mb-8">
          What are your family’s top priorities? (Choose up to 3)
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {options.map((opt) => {
          const isActive = selected.includes(opt);
          return (
            <label
              key={opt}
              onClick={() => toggleOption(opt)}
              className={`p-5 border-2 rounded-2xl text-center cursor-pointer font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-sageGreen text-white border-sageGreen shadow-md"
                    : "border-sageMint text-sageGreen hover:bg-sageMint/20 hover:border-sageGreen/50"
                }`}
            >
              {opt}
            </label>
          );
        })}
      </div>

      <div className="flex justify-end mt-10">
        <Button
          onClick={next}
          disabled={selected.length === 0}
          className={`px-8 py-3 rounded-xl font-semibold transition-all ${
            selected.length > 0
              ? "bg-sageGreen text-white hover:bg-sageHover"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
}
