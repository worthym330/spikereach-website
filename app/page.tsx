import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/home/HeroSection"
import ServiceSection from "@/components/home/ServiceSection"
// import TestimonialSection from "@/components/home/TestimonialSection"
import CtaSection from "@/components/home/CtaSection"

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/business.jpg"
                alt="About SpikeReach"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="mb-6">
                Transforming Businesses with <span className="gradient-text">Technology</span>
              </h2>
              <p className="text-lg mb-6">
                At SpikeReach, we combine cutting-edge AI solutions, robust DevOps practices, and strategic marketing
                approaches to help businesses thrive in the digital era.
              </p>
              <p className="text-lg mb-8">
                Our team of experts works closely with you to understand your unique challenges and develop tailored
                solutions that drive growth and innovation.
              </p>
              <Link href="/about" className="button-gradient">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection />

      {/* Testimonials */}
      {/* <TestimonialSection /> */}

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Impact in Numbers</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We've helped businesses across various industries achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-custom-gradient text-white rounded-lg">
              <p className="text-5xl font-bold mb-2">200+</p>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-custom-gradient text-white rounded-lg">
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-xl">Client Satisfaction</p>
            </div>
            <div className="text-center p-6 bg-custom-gradient text-white rounded-lg">
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-xl">Expert Team Members</p>
            </div>
            <div className="text-center p-6 bg-custom-gradient text-white rounded-lg">
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-xl">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}

