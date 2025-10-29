// ...ProgressBar component...
"use client";
import { motion } from "framer-motion";

export default function ProgressBar({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-beige rounded-full h-3">
      <motion.div
        className="h-3 rounded-full bg-sageGreen"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
