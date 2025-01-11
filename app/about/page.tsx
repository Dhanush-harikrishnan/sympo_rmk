"use client"

import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen py-20">
      <motion.div
        className="container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About CSBS Symposium 2025</h1>
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground px-4 sm:px-0">
          <p>
            The CSBS Symposium 2025 is a premier event organized by the Department of Computer Science and Business Systems. 
            Our mission is to bridge the gap between cutting-edge technology and innovative business strategies.
          </p>
          <p>
            This symposium brings together industry leaders, academics, and students to explore the latest trends and 
            advancements in computer science and their applications in the business world.
          </p>
          <p>
            Through a series of engaging talks, workshops, and competitions, we aim to inspire the next generation of 
            tech-savvy business leaders and foster collaboration between the fields of computer science and business.
          </p>
          <p>
            Join us for an unforgettable experience of learning, networking, and innovation at the intersection of 
            technology and business.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

