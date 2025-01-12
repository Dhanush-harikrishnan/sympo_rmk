"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
    coordinators: "Varshaa , Aswin and partha",
    details: "Showcase your research and innovative ideas in this paper presentation event. Topics can range from AI and machine learning to business analytics and information systems.",
    registrationLink: "https://forms.gle/exampleLink1"
  },
  {
    title: "Shark Tank",
    description: "Pitch your innovative business ideas to a panel of industry experts.",
    image: "/placeholder.avif",
    coordinators: "Harini P and Keerthana",
    details: "Get a chance to present your business ideas to a panel of successful entrepreneurs and investors. Receive valuable feedback and potentially secure funding for your startup.",
    registrationLink: "https://forms.gle/exampleLink2"
  },
  {
    title: "Cognitive Hackathon",
    description: "Solve complex problems using AI and machine learning techniques.",
    image: "/placeholder.avif",
    coordinators: "Siva and Sharvesh Guru",
    details: "Participate in a hackathon where you will solve complex problems using AI and machine learning techniques. Collaborate with peers and showcase your skills.",
    registrationLink: "https://forms.gle/exampleLink3"
  },
  {
    title: "Coding and Debugging",
    description: "Showcase your coding skills and debug challenging programs.",
    image: "/placeholder.avif",
    coordinators: "Sheegan Sri and Prasath",
    details: "Test your coding skills in this event where you will be required to write and debug programs. Compete with others and prove your expertise.",
    registrationLink: "https://forms.gle/exampleLink4"
  },
  {
    title: "Virtual Stock Market",
    description: "Test your financial acumen in a simulated stock market environment.",
    image: "/placeholder.avif",
    coordinators: "Kavindar and Venkat Sai",
    details: "Participate in a virtual stock market simulation where you can test your financial acumen. Make investment decisions and see how well you can grow your portfolio.",
    registrationLink: "https://forms.gle/exampleLink5"
  },
  {
    title: "Event 2",
    description: "Details coming soon.",
    image: "/placeholder.avif",
    coordinators: "Sreecharan and Joilin",
    details: "Stay tuned for more information about this exciting event.",
    registrationLink: "https://forms.gle/exampleLink6"
  }
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

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
                  <CardDescription>{event.coordinators}</CardDescription>
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedEvent(event)}>View Details</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{selectedEvent?.title}</DialogTitle>
                        <DialogDescription>{selectedEvent?.details}</DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                  <Button as="a" href={event.registrationLink} target="_blank">Register</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

