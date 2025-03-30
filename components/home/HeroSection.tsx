import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="bg-background">
      {/* <div className="hero-gradient absolute inset-0"></div> */}
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="mb-6">
              Transforming Business with <span className="gradient-text">AI, DevOps & Marketing</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-xl">
              We help businesses leverage cutting-edge technology and strategic marketing to drive growth, innovation,
              and competitive advantage in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="button-gradient">
                Get Started
              </Link>
              <Link href="/about" className="button-primary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/hero.png?height=600&width=600"
              alt="SpikeReach Hero"
              width={600}
              height={600}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

