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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          <span className="text-white">CISB</span>
          <span className="text-yellow-400">O</span>
          <span className="text-white">SIUM</span>
          <span className="text-violet-200"> 2025 Events</span>
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
        className="container mx-auto px-4 py-8 relative z-20 text-center"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        >
        <div className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 rounded-lg p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-violet-800 dark:text-violet-200">
          Register Now for CISBOSIUM 2025!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
          Join us for an exciting journey of innovation, learning, and competition. 
          Register now to participate in any of our events and showcase your talents!
          </p>
          <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 text-white shadow-lg hover:shadow-violet-300/50 dark:hover:shadow-violet-900/50 transition-all duration-300">
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
        </motion.div>

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
                      width={500}
                      height={300}
                      className="w-full h-48 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02] relative"
                      style={{ aspectRatio: '5/3' }}
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
                            height={300}
                            className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02] relative"
                            style={{ aspectRatio: '5/3' }}
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
      </motion.div>
    </div>
  )
}

