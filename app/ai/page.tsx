import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/PageHeader"
import CtaSection from "@/components/home/CtaSection"

export const metadata = {
  title: "AI Solutions | SpikeReach",
  description:
    "Cutting-edge AI solutions to transform your business. Machine learning, natural language processing, computer vision, and more.",
}

export default function AIPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="AI Solutions"
        subtitle="Cutting-edge artificial intelligence solutions to transform your business"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="mb-6">
                Harness the Power of <span className="gradient-text">Artificial Intelligence</span>
              </h2>
              <p className="text-lg mb-6">
                Our AI solutions help businesses leverage the latest advancements in artificial intelligence to automate
                processes, gain valuable insights, and create innovative products and services.
              </p>
              <p className="text-lg mb-8">
                We combine deep technical expertise with a thorough understanding of business challenges to deliver AI
                solutions that drive real-world results.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="AI Solutions"
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
            <h2 className="mb-4">Our AI Services</h2>
            <p className="text-lg max-w-3xl mx-auto">Comprehensive AI solutions tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
              <p className="mb-6 text-muted-foreground">
                Develop custom machine learning models to analyze data, identify patterns, and make predictions that
                drive business decisions and automation.
              </p>
              <Link
                href="/ai/machine-learning"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Natural Language Processing</h3>
              <p className="mb-6 text-muted-foreground">
                Build intelligent systems that understand, interpret, and generate human language, enabling chatbots,
                sentiment analysis, and content generation.
              </p>
              <Link href="/ai/nlp" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Computer Vision</h3>
              <p className="mb-6 text-muted-foreground">
                Implement systems that can analyze and understand visual information from images and videos, enabling
                object detection, facial recognition, and visual inspection.
              </p>
              <Link
                href="/ai/computer-vision"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">AI in Action</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Real-world applications of our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Retail AI Case Study"
                width={600}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Retail Inventory Optimization</h3>
                <p className="mb-6 text-muted-foreground">
                  We developed a machine learning system for a retail chain that predicts inventory needs based on
                  historical sales data, seasonal trends, and external factors. The solution reduced stockouts by 35%
                  and decreased excess inventory by 28%.
                </p>
                <Link
                  href="/case-studies/retail-ai"
                  className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Healthcare AI Case Study"
                width={600}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Healthcare Diagnostic Assistant</h3>
                <p className="mb-6 text-muted-foreground">
                  We built an AI-powered diagnostic assistant for a healthcare provider that analyzes medical images to
                  detect potential issues. The system achieved 94% accuracy in early detection, helping doctors make
                  faster and more accurate diagnoses.
                </p>
                <Link
                  href="/case-studies/healthcare-ai"
                  className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our AI Technology Stack</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build powerful AI solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="h-20 w-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="TensorFlow"
                  width={80}
                  height={80}
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-bold">TensorFlow</h3>
            </div>

            <div className="text-center p-6">
              <div className="h-20 w-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="PyTorch"
                  width={80}
                  height={80}
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-bold">PyTorch</h3>
            </div>

            <div className="text-center p-6">
              <div className="h-20 w-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="OpenAI"
                  width={80}
                  height={80}
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-bold">OpenAI</h3>
            </div>

            <div className="text-center p-6">
              <div className="h-20 w-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Hugging Face"
                  width={80}
                  height={80}
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-bold">Hugging Face</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}

