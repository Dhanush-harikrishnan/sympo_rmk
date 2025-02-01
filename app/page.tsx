"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowRight, CalendarDays, Users } from 'lucide-react'
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
    title: "Research Guru",
    description: "Present your research papers on cutting-edge topics in computer science and business systems.",
    image: "/rs.png",
    coordinators: "Varshaa, Aswin and Partha",
    details: "Showcase your research and innovative ideas in this paper presentation event. Topics can range from AI and machine learning to business analytics and information systems.",
    rules: [
      "Abstract submissions are mandatory before the deadline.",
      "Papers must follow the IEEE format.",
      "Presentations must use a PPT (max 8 slides).",
      "5-6 minutes for presentation + 5 minutes Q&A.",
      "The jury's decision will be final and binding."
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe-JlAhu5uAHSqg4kORVPhGeOe8M2_8X6_Fd40YftGZfbKIfQ/viewform?usp=header"
  },
  {
    title: "Shark Tank",
    description: "Pitch your innovative business ideas to a panel of industry experts.",
    image: "/shark_tank.jpg",
    coordinators: "Harini and Keerthana",
    details: "Get a chance to present your business ideas to a panel of successful entrepreneurs and investors. Receive valuable feedback and potentially secure funding for your startup.",
    rules: [
      "Teams of 1-4 members allowed.",
      "Business proposals must be submitted before the deadline.",
      "Presentation format: PPT (max 10 slides).",
      "Each team gets 6-8 minutes to pitch + 5 minutes Q&A.",
      "Proposals from all domains welcome."
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe-JlAhu5uAHSqg4kORVPhGeOe8M2_8X6_Fd40YftGZfbKIfQ/viewform?usp=header"
  },
  {
    title: "Coding and Debugging",
    description: "Showcase your coding skills and debug challenging programs.",
    image: "/buc.png",
    coordinators: "Sheegan Sri and Prasath",
    details: "Demonstrate your programming prowess in this coding competition. Face challenging problems and debug complex code to prove your skills in various programming languages.",
    rules: [
      "Solo or duo participation allowed.",
      "Supported languages: C, C++, Python, Java.",
      "Participants must bring their own laptops if possible.",
      "Time-based scoring: Faster completion earns more points.",
      "No external help or collaboration outside the team."
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe-JlAhu5uAHSqg4kORVPhGeOe8M2_8X6_Fd40YftGZfbKIfQ/viewform?usp=header"
  },
  {
    title: "Think Hack",
    description: "Solve complex problems using AI and machine learning techniques.",
    image: "/th.png",
    coordinators: "Siva and Sharvesh Guru",
    details: "Put your AI and machine learning skills to the test in this intensive hackathon. Work on real-world problems and develop innovative solutions using cutting-edge technologies.",
    rules: [
      "Teams of 1-3 members allowed.",
      "Participants should bring their own laptops.",
      "Problem statements will be provided at the start of the event.",
      "Use of AI tools is permitted but must be disclosed.",
      "Judging criteria include innovation, accuracy, and efficiency."
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe-JlAhu5uAHSqg4kORVPhGeOe8M2_8X6_Fd40YftGZfbKIfQ/viewform?usp=header"
  },
  {
    title: "Stock Market Challenge Meme War",
    description: "Test your financial acumen in a simulated stock market environment.",
    image: "/vwsc.jpg",
    coordinators: "Kavindar ,Venkat Sai and Hari",
    details: "Experience the thrill of stock trading in a risk-free environment. Make investment decisions, analyze market trends, and compete to build the most profitable portfolio.",
    rules: [
      "Solo or duo participation allowed.",
      "Participants start with a virtual budget.",
      "Trades and market fluctuations will be simulated in real-time.",
      "Strategies must be ethical and fair.",
      "The highest profit at the end of the competition wins."
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe-JlAhu5uAHSqg4kORVPhGeOe8M2_8X6_Fd40YftGZfbKIfQ/viewform?usp=header"
  },
  {
    title: "MystIO",
    description: "Unravel cryptic clues and uncover a hidden secret!",
    image: "/m.jpg",
    coordinators: "Sarvesh and joilin",
    details: "Solve puzzles and decipher messages in this thrilling adventure. Put your detective skills to the test!",
    rules: [
      "Participants must register before the event.",
      "Solo or Duo participation allowed.",
      "Time-based scoring: The fastest team wins!",
      "Respect and fair play must be maintained.",
      "No external help or cheating allowed."
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe-JlAhu5uAHSqg4kORVPhGeOe8M2_8X6_Fd40YftGZfbKIfQ/viewform?usp=header"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-[1920px] mx-auto">
      <motion.section
        className="relative bg-gradient-to-b from-violet-950 via-violet-900 to-violet-800 text-white py-20 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div className="w-full md:w-1/2 max-w-2xl" variants={fadeInLeft}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
                CSBS Symposium 2025
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-violet-200">Empowering Innovation and Business Acumen</p>
              <Button asChild className="bg-white hover:bg-violet-100 text-violet-900 font-semibold transition-all duration-300 hover:scale-105">
                <Link href="/events">Explore Events</Link>
              </Button>
            </motion.div>
            <motion.div className="w-full md:w-1/2 flex justify-center" variants={fadeInRight}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-lg opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-300" />
                <Image
                  src="/Banner.jpg"
                  alt="Symposium Banner"
                  layout="responsive"
                  width={700}
                  height={475}
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-w-[500px] relative z-10"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-8 relative z-20 -mt-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <Alert className="max-w-3xl mx-auto mt-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
            <CalendarDays className="h-4 w-4 text-violet-700 dark:text-violet-300" />
            <AlertTitle className="text-violet-800 dark:text-violet-200">Registration Deadline</AlertTitle>
            <AlertDescription className="text-gray-600 dark:text-gray-300">
              Online registration closes on March 17, 2025. On-spot registration will not be available.
            </AlertDescription>
          </Alert>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-12 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-violet-800 dark:text-violet-200">About the Symposium</h2>
              <p className="text-lg sm:text-xl mb-4 text-violet-700 dark:text-violet-300">Where Technology Meets Business Innovation</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join us for an exciting journey where cutting-edge technology intersects with innovative business strategies. 
                The CSBS Symposium 2025 brings together brilliant minds to explore the future of computer science and business systems.
              </p>
              <Button asChild className="bg-violet-700 hover:bg-violet-800 text-white shadow-lg hover:shadow-violet-300/50 dark:hover:shadow-violet-900/50 transition-all duration-300">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden order-first md:order-last group">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-lg opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-300" />
              <Image
                src="/img1.jpg"
                alt="Symposium"
                fill
                className="object-cover rounded-lg relative z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        </motion.section>

          <motion.section
          className="w-full py-8 relative z-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          >
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-violet-800 dark:text-violet-200">
                Register Now for CISBOSIUM 2025!
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Join us for an exciting journey of innovation, learning, and competition. 
                Register now to participate in any of our events and showcase your talents!
              </p>
              </div>
              <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 text-white shadow-lg hover:shadow-violet-300/50 dark:hover:shadow-violet-900/50 transition-all duration-300 whitespace-nowrap">
                Register for Events
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] w-[95vw] h-[95vh] max-h-[95vh] p-0 flex flex-col">
                <DialogHeader className="p-6 bg-gradient-to-r from-violet-700 to-purple-700 dark:from-violet-800 dark:to-purple-800 text-white">
                <DialogTitle>Register for CISBOSIUM 2025</DialogTitle>
                </DialogHeader>
                <div className="flex-grow overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe-JlAhu5uAHSqg4kORVPhGeOe8M2_8X6_Fd40YftGZfbKIfQ/viewform?usp=header"
                  className="w-full h-full border-none"
                  title="Event registration form"
                >
                  Loading...
                </iframe>
                </div>
              </DialogContent>
              </Dialog>
            </div>
            </div>
          </div>
          </motion.section>

        <div className="flex flex-col min-h-screen max-w-[1920px] mx-auto">
      <motion.section
        className="w-full py-12 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-violet-700">Featured Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {events.map((event, index) => (
                <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial="initial"
                animate="animate"
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
                  <CardFooter className="flex justify-end mt-auto gap-4 pt-6">
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
                        <div className="relative group mb-4">
                          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg opacity-20 blur group-hover:opacity-30 transition-opacity duration-300" />
                          <Image
                            src={event.image}
                            alt={event.title}
                            layout="responsive"
                            width={700}
                            height={475}
                            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02] relative"
                          />
                        </div>
                        <p className="text-sm text-violet-600 dark:text-violet-400 flex items-center gap-2 mb-4">
                          <Users className="w-4 h-4" />
                          Coordinators: {event.coordinators}
                        </p>
                        <h3 className="text-lg font-semibold mb-2 text-violet-800 dark:text-violet-200">Rules</h3>
                        <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
                          {event.rules.map((rule, i) => (
                          <li key={i}>{rule}</li>
                          ))}
                        </ul>
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
    </div>

        <motion.section className="w-full py-12 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-violet-800 dark:text-violet-200">
          Event Schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
              <h3 className="text-xl font-semibold mb-4">Morning Session</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>8:30 AM - 9:00 AM</span>
                  <span>Registration & Kit Distribution</span>
                </li>
                <li className="flex justify-between">
                  <span>9:00 AM - 10:00 AM</span>
                  <span>Inauguration Ceremony</span>
                </li>
                <li className="flex justify-between">
                  <span>10:00 AM - 12:00 PM</span>
                  <span>Events - Round 1</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
              <h3 className="text-xl font-semibold mb-4">Afternoon Session</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>12:00 PM - 1:00 PM</span>
                  <span>Lunch</span>
                </li>
                <li className="flex justify-between">
                  <span>1:00 PM - 2:30 PM</span>
                  <span>Events - Final Round</span>
                </li>
                <li className="flex justify-between">
                  <span>2:00 PM - 3:00 PM</span>
                  <span>Prize Distribution</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </motion.section>

      <motion.section className="w-full py-12 sm:py-20">
  <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
    <h2 className="text-3xl font-bold mb-12 text-center text-violet-800 dark:text-violet-200">
      Exciting Prizes, Rewards & Certificates Await!
    </h2>
    <Card className="text-center p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
      <h3 className="text-xl font-semibold mb-4">Win Big!</h3>
      <p className="text-3xl font-bold text-violet-700 mb-4">Cash Prizes & Prestigious Certificates</p>
      <p className="text-gray-600">Offline & Online Categories</p>
    </Card>
  </div>
</motion.section>

      

        <motion.section className="w-full py-12 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-violet-800 dark:text-violet-200">
          Important Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
              <h3 className="text-xl font-semibold mb-4">Registration Guidelines</h3>
              <ul className="space-y-3 list-disc pl-4">
                <li>Registration fee: free</li>
                <li>Team size depends on events but each person should register individually </li>
                <li>Bring college ID cards which is mandatory</li>
                <li>On-spot registration is not available</li>
              </ul>
            </Card>
            <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
              <h3 className="text-xl font-semibold mb-4">General Rules</h3>
              <ul className="space-y-3 list-disc pl-4 text-gray-600 dark:text-gray-300">
                <li>Participants must report 30 minutes before event</li>
                <li>Decision of judges will be final</li>
                <li>Certificates will be provided to all participants</li>
                <li>Lunch and refreshments will be provided</li>
              </ul>
            </Card>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-violet-800 dark:text-violet-200">Organized by</h2>
            <p className="text-xl sm:text-2xl font-semibold text-violet-600 dark:text-violet-300">Department of Computer Science and Business Systems</p>
        </div>
      </motion.section>

        <motion.section
        className="w-full py-12 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-violet-800 dark:text-violet-200">Contact Us</h2>
          <p className="text-lg sm:text-xl mb-8 text-violet-600 dark:text-violet-300">Have questions about the symposium?</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
          {/* Faculty Coordinators */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-violet-700">Faculty Coordinators</h3>
              <div className="space-y-2 text-gray-600">
                <p>Mr. C.M. Varun</p>
                <p>Associate Professor</p>
              </div>
            </div>

          {/* Student Coordinators */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-violet-700">Student President</h3>
              <div className="space-y-2 text-gray-600">
                <p>Mr. T. Dayanithi </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-violet-700">Student Coordinators</h3>
              <div className="space-y-2 text-gray-600">
                <p>Shreegan : +91 88259 20804 </p>
                <p>Kavindar     : +91 81481 80104 </p>
              </div>
            </div>
          </div>

          <Button asChild className="bg-violet-700 hover:bg-violet-800 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.section>

        <motion.section
        className="w-full py-12 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-violet-800 dark:text-violet-200">
            Venue Location
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col justify-center">
                <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
                <h3 className="text-xl font-semibold mb-4">RMK Engineering College</h3>
                <p className="text-gray-600 mb-6">
                  206, Taluk, Gummidipoondi, Kavaraipettai,<br />
                  Tamil Nadu 601206
                </p>
                <div className="flex gap-4">
                  <Button asChild className="bg-violet-700 hover:bg-violet-800">
                    <Link 
                      href="https://www.google.com/maps/dir/13.0678784,80.1964032/rmk+engineering+college+location/@13.2126142,80.0151986,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a4d807de229f987:0x11cc13e2927bfabc!2m2!1d80.1413034!2d13.3566859?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link 
                      href="tel:+91 88259 20804"
                    >
                      Contact
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
            <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.874561175642!2d80.13912407464066!3d13.356685986555505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sRMK%20Engineering%20College!5e0!3m2!1sen!2sin!4v1704718427387!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="RMK Engineering College Location"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

