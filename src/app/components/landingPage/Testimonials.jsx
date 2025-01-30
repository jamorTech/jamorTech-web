'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Adelakun from "../../../../public/images/imageL.png"
import Akerele from "../../../../public/images/imageB.png"
import Odidika from "../../../../public/images/imageD.png"
import Abe from "../../../../public/images/imageH.png"
import Festus from "../../../../public/images/imageA.png"
import Ogechukwu from "../../../../public/images/imageE.png"
import Aderonmu from "../../../../public/images/imageF.png"
import Nwokorie from "../../../../public/images/imageJ.png"
import Onyebuchi from "../../../../public/images/imageM.png"
import Ikem from "../../../../public/images/imageG.png"

const testimonials = [
    {
      id: 1,
      name: "Adelakun Oluwatobi",
      role: "Product Designer",
      image: Adelakun,
      quote: "Designing with purpose and creativity is my passion. The exposure here has been unmatched.",
      company: "Jamor Technology",
      cohort: "Cohort 1, 2023",
    },
    {
      id: 2,
      name: "Akerele Taiwo",
      role: "Frontend Engineer",
      image: Akerele,
      quote: "Building seamless interfaces is more than coding; it's about creating experiences.",
      company: "Jamor Technology",
      cohort: "Cohort 2, 2024",
    },
    {
      id: 3,
      name: "Odidika Somto Anthony",
      role: "Backend Developer",
      image: Odidika,
      quote: "Understanding systems and architecture is like solving a puzzle that makes the world work better.",
      company: "Jamor Technology",
      cohort: "Cohort 2, 2024",
    },
    // "/images/imageF.png",
    // "/images/imageG.png",
    // "/images/imageJ.png",
    // "/images/imageK.png",
    // "/images/imageM.png",
    {
      id: 4,
      name: "Abe John Opeyemi",
      role: "Product Manager",
      image: Abe,
      quote: "Guiding teams to bring ideas to life is both a responsibility and a joy.",
      company: "Jamor Technology",
      cohort: "Cohort 2, 2024",
    },
    {
      id: 5,
      name: "Festus Omotayo",
      role: "Product Designer",
      image: Festus,
      quote: "Design has the power to change how people interact with the world. I'm glad to contribute.",
      company: "Jamor Technology",
      cohort: "Cohort 2, 2024",
    },
    {
      id: 6,
      name: "Ogechukwu Aina",
      role: "Frontend Developer",
      image: Ogechukwu,
      quote: "Coding brings ideas to life. I'm proud of the impact I make with every project.",
      company: "Jamor Technology",
      cohort: "Cohort 2, 2024",
    },
    {
      id: 7,
      name: "Aderonmu Adeniyi Bidemi",
      role: "Data Analyst",
      image: Aderonmu,
      quote: "Transforming data into insights is like giving it a voice. The journey here has been inspiring.",
      company: "Jamor Technology",
      cohort: "Cohort 2, 2024",
    },
    {
      id: 8,
      name: "Nwokorie Victoria",
      role: "Project Manager",
      image: Nwokorie,
      quote: "Every project is an opportunity to lead and inspire. Jamor Technology made this possible.",
      company: "Jamor Technology",
      cohort: "Cohort 2, 2024",
    },
    {
      id: 9,
      name: "Onyebuchi Nneamaka Chisom",
      role: "Product Manager",
      image: Onyebuchi,
      quote: "From vision to execution, product management is about making the impossible happen.",
      company: "Jamor Technology",
      cohort: "Cohort 2, 2024",
    },
    {
      id: 10,
      name: "Ikem Chinedu Wisdom",
      role: "Frontend Developer",
      image: Ikem,
      quote: "Great user experiences start with great frontend design. I'm proud to make that happen.",
      company: "Jamor Technology",
      cohort: "Cohort 2, 2024",
    },
  ];
  
  export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const nextTestimonial = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }
  
    const prevTestimonial = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  
    return (
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(#2E1065 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />
        </div>
  
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear from our graduates who have successfully transitioned into their dream careers
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <FaQuoteLeft className="text-[#2E1065] opacity-10 text-8xl absolute top-8 left-8" />
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-10">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2E1065] to-purple-500 rounded-full p-1">
                      <div className="bg-white rounded-full w-full h-full p-2">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt=""
                          width={120}
                          height={120}
                          className="rounded-full w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#2E1065]">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-lg text-gray-600">{testimonials[currentIndex].role}</p>
                    <p className="text-[#2E1065] font-medium">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
  
                <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-10 font-medium italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
  
                <div className="flex justify-center gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'w-8 bg-[#2E1065]' : 'w-3 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
  
              <div className="absolute inset-y-0 -left-4 md:-left-6 flex items-center">
                <button
                  onClick={prevTestimonial}
                  className="bg-white p-3 rounded-full shadow-lg text-[#2E1065] hover:bg-[#2E1065] hover:text-white transition-colors duration-300 group"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
              </div>
  
              <div className="absolute inset-y-0 -right-4 md:-right-6 flex items-center">
                <button
                  onClick={nextTestimonial}
                  className="bg-white p-3 rounded-full shadow-lg text-[#2E1065] hover:bg-[#2E1065] hover:text-white transition-colors duration-300 group"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }  