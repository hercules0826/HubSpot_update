// ...StepPersonal component...
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export default function StepPersonal({ next }: { next: () => void }) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-heading text-sageGreen mb-4">
        Personal & Family Wishes
      </h2>
      <p>What are your family’s top priorities? (Choose up to 3)</p>

      <div className="grid grid-cols-2 gap-4">
        {[
          "Safety & Security",
          "Staying Close to Family",
          "Maintaining Independence",
          "Comfort & Quality of Life",
          "Specialized Medical Care",
        ].map((opt) => (
          <label
            key={opt}
            className="p-4 border-2 border-sageMint rounded-2xl text-center hover:bg-sageMint hover:text-sageGreen cursor-pointer transition-all"
          >
            {opt}
          </label>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <Button onClick={next}>Next</Button>
      </div>
    </motion.div>
  );
}
