"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CalendarDays } from 'lucide-react'
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

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const events = [
  {
    title: "Paper Presentation",
    description: "Present your research papers on cutting-edge topics in computer science and business systems.",
    image: "/placeholder.avif",
    coordinators: "Varshaa",
    details: "Showcase your research and innovative ideas in this paper presentation event. Topics can range from AI and machine learning to business analytics and information systems.",
    registrationLink: "https://forms.gle/1uvNyhS88KmwaE4r8"
  },
  {
    title: "Shark Tank",
    description: "Pitch your innovative business ideas to a panel of industry experts.",
    image: "/placeholder.avif",
    coordinators: "Harini P and Keerthana",
    details: "Get a chance to present your business ideas to a panel of successful entrepreneurs and investors. Receive valuable feedback and potentially secure funding for your startup.",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVCiZQJYwKsVLTdOMaZBKY6i2HWw3WrXSLsNuFgHgNa-0Rnw/viewform?embedded=true"
  },
  {
    title: "Cognitive Hackathon",
    description: "Solve complex problems using AI and machine learning techniques.",
    image: "/placeholder.avif",
    coordinators: "Siva and Sharvesh Guru",
    details: "Put your AI and machine learning skills to the test in this intensive hackathon. Work on real-world problems and develop innovative solutions using cutting-edge technologies.",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVCiZQJYwKsVLTdOMaZBKY6i2HWw3WrXSLsNuFgHgNa-0Rnw/viewform?embedded=true"
  },
  {
    title: "Coding and Debugging",
    description: "Showcase your coding skills and debug challenging programs.",
    image: "/placeholder.avif",
    coordinators: "Sheegan Sri and Prasath",
    details: "Demonstrate your programming prowess in this coding competition. Face challenging problems and debug complex code to prove your skills in various programming languages.",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVCiZQJYwKsVLTdOMaZBKY6i2HWw3WrXSLsNuFgHgNa-0Rnw/viewform?embedded=true"
  },
  {
    title: "Virtual Stock Market",
    description: "Test your financial acumen in a simulated stock market environment.",
    image: "/placeholder.avif",
    coordinators: "Kavindar and Venkat Sai",
    details: "Experience the thrill of stock trading in a risk-free environment. Make investment decisions, analyze market trends, and compete to build the most profitable portfolio.",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVCiZQJYwKsVLTdOMaZBKY6i2HWw3WrXSLsNuFgHgNa-0Rnw/viewform?embedded=true"
  },
  {
    title: "Event 2",
    description: "Details coming soon.",
    image: "/placeholder.avif",
    coordinators: "Sreecharan and Joilin",
    details: "Stay tuned for more information about this exciting upcoming event!",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVCiZQJYwKsVLTdOMaZBKY6i2HWw3WrXSLsNuFgHgNa-0Rnw/viewform?embedded=true"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.section
        className="bg-gradient-to-r from-gray-100 to-white text-gray-800 py-12 sm:py-20"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={fadeInLeft}>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-violet-700">CSBS Symposium 2025</h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-600">Empowering Innovation and Business Acumen</p>
              <Button asChild className="bg-violet-700 hover:bg-violet-800 text-white">
                <Link href="/events">Explore Events</Link>
              </Button>
            </motion.div>
            <motion.div className="md:w-1/2 flex justify-center" variants={fadeInRight}>
              <Image
                src="/Banner.jpg"
                alt="Department Logo"
                width={400}
                height={300}
                className="rounded-full shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <Alert>
            <CalendarDays className="h-4 w-4" />
            <AlertTitle>Registration Deadline</AlertTitle>
            <AlertDescription>
              Online registration closes on March 25, 2025. On-spot registration will be available.
            </AlertDescription>
          </Alert>
        </div>
      </motion.section>

      <motion.section
        className="py-12 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-violet-700">About the Symposium</h2>
              <p className="text-lg sm:text-xl mb-4 text-gray-700">Where Technology Meets Business Innovation</p>
              <p className="text-gray-600 mb-6">
                Join us for an exciting journey where cutting-edge technology intersects with innovative business strategies. 
                The CSBS Symposium 2025 brings together brilliant minds to explore the future of computer science and business systems.
              </p>
              <Button asChild className="bg-violet-700 hover:bg-violet-800 text-white">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden order-first md:order-last">
              <Image
                src="/img1.jpg"
                alt="Symposium"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 sm:py-20 bg-gray-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-violet-700">Featured Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-violet-700">{event.title}</CardTitle>
                    <CardDescription>Coordinators: {event.coordinators}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between mt-auto">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="text-violet-700 border-violet-700 hover:bg-violet-50">View Details</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{event.title}</DialogTitle>
                          <DialogDescription>
                            {event.details}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <p className="text-sm text-gray-500">Coordinators: {event.coordinators}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-violet-700 hover:bg-violet-800 text-white">
                          Register
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[900px] w-[95vw] h-[95vh] max-h-[95vh] p-0 flex flex-col">
                        <DialogHeader className="p-6">
                          <DialogTitle>Register for {event.title}</DialogTitle>
                        </DialogHeader>
                        <div className="flex-grow overflow-hidden">
                          <iframe
                            src={event.registrationLink}
                            className="w-full h-full border-none"
                            title={`Registration form for ${event.title}`}
                          >
                            Loading…
                          </iframe>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-violet-700">Organized by</h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-700">Department of Computer Science and Business Systems</p>
        </div>
      </motion.section>

      <motion.section
        className="py-12 sm:py-20 bg-gray-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-violet-700">Contact Us</h2>
          <p className="text-lg sm:text-xl mb-4 text-gray-700">Have questions about the symposium?</p>
          <Button asChild className="bg-violet-700 hover:bg-violet-800 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  )
}

