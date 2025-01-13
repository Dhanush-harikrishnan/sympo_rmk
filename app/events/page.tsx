"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Trophy, Users, Calendar, ArrowRight } from 'lucide-react'

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

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative bg-gradient-to-b from-violet-950 via-violet-900 to-violet-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
            CSBS Symposium 2025 Events
          </h1>
          
          <div className="flex justify-center gap-8 flex-wrap mb-12">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-violet-200">6+ Events</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-violet-200" />
              <span className="text-violet-200">12+ Coordinators</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-violet-200" />
              <span className="text-violet-200">March 2025</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto px-4 py-16 relative z-20 -mt-8"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="group h-full flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-violet-800 dark:text-violet-200 flex items-center justify-between">
                    {event.title}
                    <span className="p-2 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-300 group-hover:bg-violet-200 dark:group-hover:bg-violet-800/50 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                    <Users className="w-4 h-4" />
                    Coordinators: {event.coordinators}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg opacity-20 blur group-hover:opacity-30 transition-opacity duration-300" />
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02] relative"
                    />
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{event.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between mt-auto gap-4 pt-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-800/50 transition-all duration-300"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
                      <DialogHeader>
                        <DialogTitle className="text-xl text-violet-800 dark:text-violet-200">
                          {event.title}
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 dark:text-gray-300">
                          {event.details}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <p className="text-sm text-violet-600 dark:text-violet-400 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Coordinators: {event.coordinators}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 text-white shadow-lg hover:shadow-violet-300/50 dark:hover:shadow-violet-900/50 transition-all duration-300">
                        Register
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[900px] w-[95vw] h-[95vh] max-h-[95vh] p-0 flex flex-col">
                      <DialogHeader className="p-6 bg-gradient-to-r from-violet-700 to-purple-700 dark:from-violet-800 dark:to-purple-800 text-white">
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
      </motion.div>
    </div>
  )
}

