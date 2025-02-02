"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import UserRegistration from "@/components/UserRegistration"
import SetupOrganization from "@/components/SetupOrganization"
import ChatbotIntegration from "@/components/ChatbotIntegration"

const steps = ["User Registration", "Setup Organization", "Chatbot Integration"]

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="stars" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">AI Chatbot Setup</h1>
        <p className="text-xl text-muted-foreground">
          Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
        </p>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-4xl"
        >
          {currentStep === 0 && <UserRegistration onComplete={nextStep} />}
          {currentStep === 1 && <SetupOrganization onComplete={nextStep} />}
          {currentStep === 2 && <ChatbotIntegration />}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}

