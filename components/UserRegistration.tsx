"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FcGoogle } from "react-icons/fc"

interface UserRegistrationProps {
  onComplete: () => void
}

export default function UserRegistration({ onComplete }: UserRegistrationProps) {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    verificationCode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 0) {
      // Simulate sending verification code
      setStep(1)
    } else {
      // Simulate verifying code
      onComplete()
    }
  }

  const handleGoogleSignIn = () => {
    // Simulate Google sign-in
    onComplete()
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>Get started with your AI chatbot journey</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {step === 0 ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="verificationCode">Verification Code</Label>
                <Input
                  id="verificationCode"
                  name="verificationCode"
                  placeholder="123456"
                  value={formData.verificationCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
          </motion.div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          {step === 0 ? "Register" : "Verify"}
        </Button>
        {step === 0 && (
          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
            <FcGoogle className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

