"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Bot, Code, Mail, MessageSquare, Share2, CheckCircle } from "lucide-react"

export default function ChatbotIntegration() {
  const [isIntegrated, setIsIntegrated] = useState(false)
  const [showSuccessUI, setShowSuccessUI] = useState(false)

  const handleTestChatbot = () => {
    window.open("/demo-website", "_blank")
  }

  const handleTestIntegration = () => {
    // Simulate integration check
    setTimeout(() => {
      setIsIntegrated(true)
      setShowSuccessUI(true)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }, 2000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Chatbot Integration & Testing</CardTitle>
        <CardDescription>Configure and test your AI-powered chatbot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button onClick={handleTestChatbot} className="h-auto py-4 px-6">
            <Bot className="w-6 h-6 mr-2" />
            <div className="text-left">
              <div className="font-semibold">Test Chatbot</div>
              <div className="text-sm opacity-90">Preview on demo site</div>
            </div>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="h-auto py-4 px-6">
                <Code className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Integrate on Website</div>
                  <div className="text-sm opacity-90">Get integration code</div>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Integrate Chatbot</DialogTitle>
                <DialogDescription>Choose how you want to integrate the chatbot on your website.</DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="code" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="code">Copy Code</TabsTrigger>
                  <TabsTrigger value="email">Email Instructions</TabsTrigger>
                </TabsList>
                <TabsContent value="code">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Copy and paste the following code within the {`<head>`} tag of your website:
                    </p>
                    <Textarea
                      readOnly
                      value={`<script src="https://example.com/chatbot.js"></script>
<script>
  window.ChatbotConfig = {
    apiKey: 'YOUR_API_KEY_HERE'
  };
</script>`}
                    />
                    <Button className="w-full">Copy to Clipboard</Button>
                  </div>
                </TabsContent>
                <TabsContent value="email">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="developerEmail">Developer's Email</Label>
                      <Input id="developerEmail" placeholder="Enter email address" />
                    </div>
                    <Button className="w-full">Send Instructions</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
          <Button onClick={handleTestIntegration} className="h-auto py-4 px-6">
            <CheckCircle className="w-6 h-6 mr-2" />
            <div className="text-left">
              <div className="font-semibold">Test Integration</div>
              <div className="text-sm opacity-90">Verify setup</div>
            </div>
          </Button>
        </div>
        {showSuccessUI && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-green-900 border-green-700">
              <CardHeader>
                <CardTitle className="text-green-100 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                  Integration Successful!
                </CardTitle>
                <CardDescription className="text-green-200">
                  Your chatbot is now ready to assist your website visitors.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="secondary">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Start Talking to Chatbot
                  </Button>
                  <Button variant="secondary">
                    <Bot className="w-5 h-5 mr-2" />
                    Explore Admin Panel
                  </Button>
                </div>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  {/* Add more social media sharing buttons here */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
        {!isIntegrated && (
          <Card className="bg-yellow-900 border-yellow-700">
            <CardHeader>
              <CardTitle className="text-yellow-100 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2 text-yellow-400" />
                Integration Not Detected
              </CardTitle>
              <CardDescription className="text-yellow-200">
                We couldn&apos;t detect the chatbot on your website. Please ensure you&apos;ve correctly integrated the
                code.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}

