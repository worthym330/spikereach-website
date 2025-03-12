import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/PageHeader"
import CtaSection from "@/components/home/CtaSection"

export const metadata = {
  title: "Marketing Solutions | SpikeReach",
  description: "Strategic marketing solutions to grow your business. SEO, content marketing, social media, and more.",
}

export default function MarketingPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Marketing Solutions"
        subtitle="Strategic marketing solutions to grow your business and reach your target audience"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="mb-6">
                Elevate Your <span className="gradient-text">Brand Presence</span>
              </h2>
              <p className="text-lg mb-6">
                Our marketing solutions help businesses build strong brands, reach their target audience, and drive
                measurable results through strategic digital marketing campaigns.
              </p>
              <p className="text-lg mb-8">
                We combine data-driven insights with creative excellence to develop marketing strategies that resonate
                with your audience and achieve your business objectives.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Marketing Solutions"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Marketing Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600 dark:text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Search Engine Optimization</h3>
              <p className="mb-6 text-muted-foreground">
                Improve your website's visibility in search engine results to drive organic traffic and reach potential
                customers actively searching for your products or services.
              </p>
              <Link href="/marketing/seo" className="text-amber-600 dark:text-amber-400 font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600 dark:text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Content Marketing</h3>
              <p className="mb-6 text-muted-foreground">
                Create valuable, relevant content that attracts and engages your target audience, establishing your
                brand as an authority in your industry.
              </p>
              <Link
                href="/marketing/content"
                className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600 dark:text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Social Media Marketing</h3>
              <p className="mb-6 text-muted-foreground">
                Build and engage your community on social media platforms with strategic content, campaigns, and paid
                advertising to increase brand awareness and drive conversions.
              </p>
              <Link
                href="/marketing/social-media"
                className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="section-padding bg-gradient-to-r from-amber-500 to-amber-700 text-white dark:from-amber-700 dark:to-amber-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Premium Marketing Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Exclusive marketing solutions for businesses seeking exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Brand Development</h3>
              <p className="text-lg mb-6">
                Comprehensive brand development services including brand strategy, identity design, messaging, and
                guidelines to create a cohesive and compelling brand presence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Brand Strategy Development</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visual Identity Design</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Brand Messaging & Positioning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Brand Guidelines & Assets</span>
                </li>
              </ul>
              <Link
                href="/marketing/brand-development"
                className="inline-block px-6 py-3 bg-white text-amber-600 rounded-md font-medium transition-all hover:bg-amber-50"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Marketing Strategy</h3>
              <p className="text-lg mb-6">
                Custom marketing strategy development to align your marketing efforts with your business goals and
                target audience, maximizing ROI and driving sustainable growth.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Market & Competitor Analysis</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Target Audience Definition</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Channel Strategy & Planning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Performance Measurement Framework</span>
                </li>
              </ul>
              <Link
                href="/marketing/strategy"
                className="inline-block px-6 py-3 bg-white text-amber-600 rounded-md font-medium transition-all hover:bg-amber-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Results That Speak for Themselves</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Our marketing solutions deliver measurable results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-lg shadow-md">
              <div className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-4">150%</div>
              <h3 className="text-xl font-bold mb-2">Increase in Organic Traffic</h3>
              <p className="text-muted-foreground">
                Average increase in organic search traffic for our SEO clients within 6 months
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-lg shadow-md">
              <div className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-4">3.2x</div>
              <h3 className="text-xl font-bold mb-2">ROI on Ad Spend</h3>
              <p className="text-muted-foreground">Average return on investment for our paid advertising campaigns</p>
            </div>

            <div className="text-center p-8 bg-card rounded-lg shadow-md">
              <div className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-4">85%</div>
              <h3 className="text-xl font-bold mb-2">Engagement Increase</h3>
              <p className="text-muted-foreground">Average increase in social media engagement for our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}

