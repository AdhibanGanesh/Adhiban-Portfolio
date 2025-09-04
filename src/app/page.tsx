"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import Head from "next/head";

<Head>
  <title>Adhiban Ganesh N | Portfolio</title>
  <meta name="description" content="Portfolio of Adhiban Ganesh N — AI, IoT & Web Developer. Explore my projects, achievements, and YouTube journey." />
  <meta name="keywords" content="Adhiban Ganesh, Portfolio, AI, IoT, Software, Engineer, Website, Web Development, Tamil, YouTube, Projects, Resume, Awards, Certifications, Work, Jobs" />
  <meta name="author" content="Adhiban Ganesh N" />
  <link rel="icon" href="/favicon.ico"/>
</Head>

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800">
      <header className="fixed top-0 left-0 w-full bg-zinc-950 shadow-md z-50">
        <nav className="max-w-8xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-white">A Glimpse into My World</h1>
          <ul className="hidden md:flex space-x-6 text-white font-bold">
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-blue-500 text-white text-center p-6">
        <Image
          src="/profile.jpg"      
          alt="Adhiban Ganesh N"
          width={250}              
          height={250}
          className="rounded-full border-4 border-blue-400 mt-12 shadow-lg hover:scale-105 transition-transform duration-300"
          priority                  
        />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-2 mt-2"
        >
          Adhiban Ganesh N
        </motion.h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-2">
          AI & IoT Enthusiast • Software Developer • Tamil YouTuber
        </p>
        <div className="flex gap-10 mb-6">
          <a href="mailto:adhiban7th@gmail.com" aria-label="Email">
            <Mail className="w-8 h-8 hover:text-blue-300" />
          </a>
          <a href="https://github.com/AdhibanGanesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-8 h-8 hover:text-blue-300" />
          </a>
          <a href="https://www.linkedin.com/in/adhibanganeshn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-8 h-8 hover:text-blue-300" />
          </a>
          <a href="https://youtube.com/@AGTraVlogs" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="w-8 h-8 hover:text-blue-300" />
          </a>
        </div>
        <div className="flex gap-6">
          <a
            href="#projects"
            className="px-10 py-4 bg-white text-blue-500 font-semibold rounded-2xl shadow hover:bg-gray-300"
          >
            My Projects
          </a>
          <a
            href="#experience"
            className="px-10 py-4 bg-white text-blue-500 font-semibold rounded-2xl shadow hover:bg-gray-300"
          >
            Work Experience
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-white text-blue-500 font-semibold rounded-2xl shadow hover:bg-gray-300"
          >
            Contact Me
          </a>
        </div>
        <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:space-x-10 md:items-center items-start">
    
        {/* Left Title Section */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0 text-left md:text-center">
            <h2 className="text-6xl md:text-7xl font-serif text-white leading-tight text-center md:text-center">
              Get to Know ME!
            </h2>
          </div>

        {/* Right Content Section */}
          <div className="md:w-1/2 w-full">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <p className="text-black text-lg leading-relaxed font-bold">
                I am a B.Tech CSE (IoT) Graduate passionate about building projects in AI, IoT, 
                and Web Development, from Shiv Nadar University, Chennai. I also run a YouTube
                channel <span className="font-semibold text-blue-700">AG TraVlogs</span> with 
                40,000+ subscribers, creating content related to Travel around India, Travel Videos, 
                Informative Talks, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-black p-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Right Heading Section — Will show above on mobile */}
          <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
            <h2 className="text-5xl md:text-7xl md:mt-8 font-serif text-white leading-tight text-center md:text-center">
              Professional Experience
            </h2>
          </div>

          {/* Left Content Section */}
          <div className="md:w-1/2 w-full space-y-6 order-2 md:order-1">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900">
                Academic Trainee Intern, HCL Tech <br />(05/2024 - 07/2024)
              </h3>
              <p className="text-sm text-gray-600 mb-3">Chennai, India</p>
              <p className="text-black leading-relaxed text-lg justify-center">
                Implemented a Retrieval-Augmented Generation (RAG) pipeline using
                LLMs to build a Responsible AI system that evaluates risks and legal
                compliance in ML models. Focused on Prompt Engineering techniques to
                generate ethical and explainable risk assessments.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="education" className="bg-white p-10">
          <div className="flex flex-col md:flex-row md:space-x-10 items-start md:items-center">

            {/* Left Title Section */}
            <div className="md:w-1/2 w-full mb-6 md:mb-0 text-left md:text-center">
              <h2 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight text-center md:text-center">
                Academic Education
              </h2>
            </div>

            {/* Right Content Section */}
            <div className="md:w-1/2 w-full space-y-4">
      
              {/* B.Tech */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center">
                  <p className="text-black text-lg leading-relaxed">
                    <span className="font-bold text-2xl">B.Tech CSE - (IoT)</span>, <span className="whitespace-nowrap">Shiv Nadar University, Chennai</span><br />
                    CGPA - <span className="font-semibold">8.907</span>
                  </p>
                  <span className="text-gray-500 text-lg whitespace-nowrap">(2021 - 2025)</span>
                </div>
              </div>

              {/* Class 12 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center">
                  <p className="text-black text-lg leading-relaxed">
                    <span className="font-bold text-2xl">Class 12 - CBSE</span>, <span className="whitespace-nowrap">BVM Global @ Coimbatore</span><br />
                    AISSCE - <span className="font-semibold">97.8%</span>
                  </p>
                  <span className="text-gray-500 text-lg whitespace-nowrap">(2019 - 2021)</span>
                </div>
              </div>

              {/* Class 10 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center">
                  <p className="text-black text-lg leading-relaxed">
                    <span className="font-bold text-2xl">Class 10 - CBSE</span>, Geethaanjali AISSS, Erode<br />
                    AISSE - <span className="font-semibold">95%</span>
                  </p>
                  <span className="text-gray-500 text-lg whitespace-nowrap">(2016 - 2019)</span>
                </div>
              </div>
            </div>
          </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-br from-blue-500 to-black text-black p-8">
        <h2 className="text-6xl font-serif mb-8 text-white text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "ML Models Risk Compliance & Assessment Application - Gen AI",
              desc: "Implemented a Retrieval-Augmented Generation (RAG) pipeline using LLMs to build a Responsible AI system that evaluates risks and legal compliance in ML models. Focused on Prompt Engineering techniques to generate ethical and explainable risk assessments.",
            },
            {
              title: "IoT Based Dairy Food Spoilage Monitoring System",
              desc: "Developed a Smart IoT solution to monitor Milk Spoilage using pH, Temperature, Humidity and Gas sensors. Integrated Fuzzy Logic based Decision, UV Sterilization Activation and Gen AI Based Summary, with Real-time alerts and Data visualization using Cloud via a Mobile App.",
            },
            {
              title: "Automated IoT Smart Farming System",
              desc: "Designed an IoT-based system to Automate Irrigation and Crop monitoring. Implemented Soil Moisture, Humidity, and Temperature sensing, enabling Smart Water Usage and Remote monitoring via Cloud dashboards.",
            },
            {
              title: "Inventory Management System for a Factory",
              desc: "Built a Real-time Inventory tracking system using RFID sensors, load cell sensors and ESP8266. Automated Stock level monitoring and Data logging based on the logic of Weights per item, reducing Manual errors and Improving factory supply chain visibility.",
            },
            {
              title: "Playschool Live Website",
              desc: "Designed a Simple and Responsive multi-page website for a local playschool using HTML, CSS, and JavaScript.",
              link: "https://emojisplayschool.in/",
            },
            {
              title: "Smart Glove for Disabled",
              desc: "Developed a Wearable IoT glove embedded with Gyro sensors and Microcontroller to convert hand and finger gestures into pointer actions. Specifically for Gaming, aimed at differently abled Children.",
            },
            {
              title: "Automated Street Lights System",
              desc: "Implemented an Energy-efficient system where Streetlights automatically activate based on Ambient Light and Motion Detection. Used LDR and PIR sensors to reduce power consumption.",
            },
            {
              title: "Automated Car Wiper",
              desc: "Created a Smart Wiper system that Activates automatically based on Rain Detection using a Rain sensor. Enhanced Driver Convenience and Safety during Rainy conditions.",
            },
          ].map((proj, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-lg mb-2 text-blue-600 hover:underline inline-block"
                  aria-label={`Visit ${proj.title}`}
                >
                  {proj.title}
                </a>
              ) : (
                <h3 className="font-bold text-lg mb-2">{proj.title}</h3>
              )}
              <p className="text-sm text-black">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Certifications */}
      <section id="awards" className="bg-black p-8">
        <h2 className="text-white text-6xl font-serif mb-8 text-center">Awards</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Academic Excellence Achiever - 2nd Rank (Sem III)</h3>
            <p>CSE Department, Shiv Nadar University Chennai</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Namma Area Digital Super Star - Winner</h3>
            <p>YouTube Channel related Digital Award in Tamil Nadu</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white p-8">
        <h2 className="text-5xl font-serif mb-8 text-black text-center">Skills & Tools</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold mb-2">Programming</h3>
            <p>Python, C, Java, Embedded C</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold mb-2">Internet of Things</h3>
            <p>Arduino IDE, Adafruit IO, Raspberry Pi, ESP8266</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold mb-2">Web Development</h3>
            <p>HTML, CSS, JavaScript, React.js, Flask</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold mb-2">Data & Visualization</h3>
            <p>MySQL, Tableau</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold mb-2">Others</h3>
            <p>Git, Figma, LLM, Langchain, Prompt Engineering, OpenAI API, FAISS</p>
          </div>
        </div>
      </section>

      <section id="certificates" className="bg-gradient-to-br from-black to-blue-500 p-8">
        <h2 className="text-white text-5xl font-serif mb-8 text-center">Certificates</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Affective Computing</h3>
            <p>NPTEL</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Ethical Hacking</h3>
            <p>NPTEL</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Introduction to Generative AI</h3>
            <p>Google Cloud Skill Boost</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Introduction to Large Language Models</h3>
            <p>Google Cloud Skill Boost</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Introduction to Responsible AI</h3>
            <p>Google Cloud Skill Boost</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Applying AI Principles with Google Cloud</h3>
            <p>Google Cloud Skill Boost</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">User-centric Computing & Human Computer Interaction</h3>
            <p>NPTEL</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Social Networks</h3>
            <p>NPTEL</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Systems and Usable Security</h3>
            <p>NPTEL</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Python</h3>
            <p>NPTEL</p>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section id="youtube" className="bg-black p-8 text-center">
        <h2 className="text-5xl text-white font-serif mb-6">YouTube Channel</h2>
        <p className="text-white font-semibold text-2xl">AG TraVlogs – 40,000 plus Subscribers</p>
        <a
          href="https://www.youtube.com/@AGTraVlogs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300"
        >
          Visit My YouTube Channel!
        </a>
        <p className="text-white mt-4 font-semibold text-2xl">[Content Creation, Informative Talks in Tamil, Travel Vlogging across India]</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-3">Contact</h2>
        <p className="mb-3 font-semibold text-xl">Let’s connect! Reach me via Email or LinkedIn.</p>
        <div className="flex gap-4 justify-center">
          <a
            href="mailto:adhiban7th@gmail.com"
            className="px-6 py-4 bg-blue-500 text-white rounded-2xl font-semibold hover:bg-green-700"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/adhibanganeshn"
            className="px-6 py-4 bg-blue-500 text-white rounded-2xl font-semibold hover:bg-green-700"
          >
            Connect in LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        <p>© {new Date().getFullYear()} Adhiban Ganesh N. All rights reserved.</p>
      </footer>
    </div>
  );
}