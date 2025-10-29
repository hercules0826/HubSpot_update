// ...care-discovery main page...
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepPersonal from "./components/StepPersonal";
import StepSocial from "./components/StepSocial";
import StepMedical from "./components/StepMedical";
import StepFinancial from "./components/StepFinancial";
import ProgressBar from "./components/ProgressBar";

const steps = [
  { id: 1, label: "Personal" },
  { id: 2, label: "Social" },
  { id: 3, label: "Medical" },
  { id: 4, label: "Financial" },
];

export default function CareDiscoveryPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <section className="max-w-3xl mx-auto py-16 px-6 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-4xl font-heading text-sageGreen text-center mb-4">
        Care Discovery
      </h1>
      <p className="text-center text-grayText mb-10">
        Let’s find the right community for your loved one — it only takes a few minutes.
      </p>

      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

      <div className="relative mt-10 min-h-[300px]">
        <AnimatePresence mode="wait">
          {currentStep === 1 && <StepPersonal key="personal" next={next} />}
          {currentStep === 2 && <StepSocial key="social" next={next} prev={prev} />}
          {currentStep === 3 && <StepMedical key="medical" next={next} prev={prev} />}
          {currentStep === 4 && <StepFinancial key="financial" prev={prev} />}
        </AnimatePresence>
      </div>
    </section>
  );
}
