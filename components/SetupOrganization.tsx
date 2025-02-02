"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

interface SetupOrganizationProps {
  onComplete: () => void
}

const dummyPages = [
  { url: "https://example.com", status: "scraped" },
  { url: "https://example.com/about", status: "scraped" },
  { url: "https://example.com/products", status: "pending" },
  { url: "https://example.com/contact", status: "detected" },
]

const dummyChunks = [
  "Welcome to our company! We specialize in innovative solutions.",
  "Our team of experts is dedicated to providing top-notch service.",
  "Explore our wide range of products designed to meet your needs.",
]

export default function SetupOrganization({ onComplete }: SetupOrganizationProps) {
  const [companyData, setCompanyData] = useState({
    name: "",
    website: "",
    description: "",
  })
  const [scrapedPages, setScrapedPages] = useState(dummyPages)
  const [selectedPage, setSelectedPage] = useState("")
  const [progress, setProgress] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value })
  }

  const fetchMetaDescription = () => {
    // Simulate fetching meta description
    setCompanyData({
      ...companyData,
      description: "Auto-fetched meta description for " + companyData.website,
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Setup Organization</CardTitle>
        <CardDescription>Configure your company details and review scraped data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Company Name</Label>
            <Input id="name" name="name" value={companyData.name} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Company Website</Label>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                id="website"
                name="website"
                value={companyData.website}
                onChange={handleInputChange}
                className="flex-grow"
              />
              <Button onClick={fetchMetaDescription} className="w-full sm:w-auto">
                Fetch Description
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Company Description</Label>
            <Textarea
              id="description"
              name="description"
              value={companyData.description}
              onChange={handleInputChange}
            />
          </div>
        </motion.div>
        <div className="space-y-4">
          <Label>Website Scraping Progress</Label>
          <Progress value={progress} className="w-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Detected Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <ul className="space-y-2">
                    {scrapedPages.map((page, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`flex justify-between items-center p-2 rounded cursor-pointer ${
                          selectedPage === page.url ? "bg-secondary" : "hover:bg-secondary/50"
                        }`}
                        onClick={() => setSelectedPage(page.url)}
                      >
                        <span className="truncate">{page.url}</span>
                        <span>
                          {page.status === "scraped" && <CheckCircle2 className="text-green-500" />}
                          {page.status === "pending" && <Clock className="text-yellow-500" />}
                          {page.status === "detected" && <AlertCircle className="text-blue-500" />}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scraped Data Chunks</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <ul className="space-y-2">
                    {dummyChunks.map((chunk, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-2 bg-secondary/50 rounded"
                      >
                        {chunk}
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onComplete} className="w-full">
          Continue to Chatbot Integration
        </Button>
      </CardFooter>
    </Card>
  )
}

