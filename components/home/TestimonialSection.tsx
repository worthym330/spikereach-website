"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "SpikeReach transformed our development process with their DevOps solutions. We've reduced deployment time by 70% and significantly improved our system reliability.",
    author: "John Anderson",
    position: "CTO, TechNova Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The AI solution provided by SpikeReach has revolutionized how we handle customer data. We're now able to extract valuable insights that drive our business decisions.",
    author: "Sarah Johnson",
    position: "Data Science Director, Insight Analytics",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "Our marketing performance has skyrocketed since working with SpikeReach. Their strategic approach and data-driven methods have helped us achieve a 150% increase in qualified leads.",
    author: "Michael Chen",
    position: "Marketing VP, GrowthForce",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with SpikeReach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-lg p-8 md:p-12 shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-primary opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl mb-8 text-card-foreground">{testimonials[currentIndex].content}</p>
              <div className="flex items-center flex-col">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  width={64}
                  height={64}
                  className="rounded-full mb-4"
                />
                <div className="text-center">
                  <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-muted-foreground">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-background shadow-md text-foreground hover:bg-secondary focus:outline-none transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-background shadow-md text-foreground hover:bg-secondary focus:outline-none transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

