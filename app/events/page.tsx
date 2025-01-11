"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const events = [
  {
    title: "Paper Presentation",
    description: "Present your research papers on cutting-edge topics in computer science and business systems.",
    image: "/placeholder.avif",
    participants: "Varshaa"
  },
  {
    title: "Shark Tank",
    description: "Pitch your innovative business ideas to a panel of industry experts.",
    image: "/placeholder.avif",
    participants: "Harini P and Keerthana"
  },
  {
    title: "Cognitive Hackathon",
    description: "Solve complex problems using AI and machine learning techniques.",
    image: "/placeholder.avif",
    participants: "Siva and Sharvesh Guru"
  },
  {
    title: "Coding and Debugging",
    description: "Showcase your coding skills and debug challenging programs.",
    image: "/placeholder.avif",
    participants: "Sheegan Sri and Prasath"
  },
  {
    title: "Virtual Stock Market",
    description: "Test your financial acumen in a simulated stock market environment.",
    image: "/placeholder.avif",
    participants: "Kavindar and Venkat Sai"
  },
  {
    title: "Event 2",
    description: "Details coming soon.",
    image: "/placeholder.avif",
    participants: "Sreecharan and Joilin"
  }
]

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen py-20">
      <motion.div
        className="container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">CSBS Symposium 2025 Events</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.participants}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Register</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

