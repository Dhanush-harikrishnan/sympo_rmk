"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Sparkles, Globe2, Brain, Cpu, Trophy } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const features = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Global Network",
    description: "Connect with participants from across the globe"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Innovation Hub",
    description: "Experience cutting-edge technology and ideas"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Competitions",
    description: "Showcase your skills and win exciting prizes"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Tech Workshops",
    description: "Learn from industry experts and professionals"
  }
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-violet-950 via-violet-900 to-violet-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <motion.div
          className="container mx-auto px-4 py-24 relative z-10"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
            CSBS Symposium 2025
            <span className="inline-block ml-2">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-violet-200 text-center max-w-3xl mx-auto mb-12">
            Where Technology Meets Business Innovation
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Participants" },
              { number: "20+", label: "Events" },
              { number: "10+", label: "Speakers" },
              { number: "₹1L+", label: "Prize Pool" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-violet-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        className="py-20 relative z-20 -mt-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="p-6 h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300">
                  <div className="bg-gradient-to-br from-violet-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-6 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-violet-800 dark:text-violet-200">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-1 flex-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
                  <h2 className="text-2xl font-bold text-violet-800 dark:text-violet-200">Our Vision</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" />
                </div>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  The CSBS Symposium 2025 is a premier event that brings together the brightest minds in technology and business. 
                  Our mission is to bridge the gap between cutting-edge technology and innovative business strategies.
                </p>

                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6 rounded-xl text-white">
                  <p className="text-lg font-medium italic">
                    &ldquo;Inspiring the next generation of tech-savvy business leaders and fostering collaboration between 
                    the fields of computer science and business.&rdquo;
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Through engaging talks, workshops, and competitions, we create an environment where innovation thrives 
                  and future leaders are born. Join us for an unforgettable experience at the intersection of 
                  technology and business.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

