import Link from "next/link"

const CtaSection = () => {
  return (
    <section className="section-padding bg-custom-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss how our AI, DevOps, and Marketing solutions can help you achieve your business
            goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#833ab4] rounded-md font-medium transition-all hover:bg-primary-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-opacity-50"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-transparent border border-primary-foreground text-primary-foreground rounded-md font-medium transition-all hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-opacity-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection

