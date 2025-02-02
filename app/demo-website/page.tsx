"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, X } from "lucide-react"

export default function DemoWebsitePage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: "bot" }])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }])
      setInput("")
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Thank you for your message. This is a demo chatbot response.", sender: "bot" },
        ])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Demo Website</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Welcome to Our Demo Website</h2>
          <p className="text-lg">
            This is a sample page to demonstrate the chatbot integration. You can interact with the chatbot using the
            icon in the bottom right corner.
          </p>
          <div className="flex space-x-4">
            <Button>Learn More</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </main>
      {isChatbotOpen ? (
        <Card className="fixed bottom-4 right-4 w-80 h-96 flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-lg flex justify-between items-center">
              Demo Chatbot
              <Button variant="ghost" size="icon" onClick={() => setIsChatbotOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden p-0">
            <ScrollArea className="h-full p-4">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-2">
            <div className="flex w-full space-x-2">
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button size="icon" onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button className="fixed bottom-4 right-4 rounded-full w-16 h-16" onClick={() => setIsChatbotOpen(true)}>
          <MessageCircle className="w-8 h-8" />
        </Button>
      )}
    </div>
  )
}

