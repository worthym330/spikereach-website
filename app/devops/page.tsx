import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/PageHeader"
import CtaSection from "@/components/home/CtaSection"

export const metadata = {
  title: "DevOps Solutions | SpikeReach",
  description:
    "Streamline your development and operations with our expert DevOps solutions. Cloud strategy, infrastructure automation, and DevOps consulting.",
}

export default function DevOpsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="DevOps Solutions"
        subtitle="Streamline your development and operations with our expert DevOps solutions"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="mb-6">
                Accelerate Your <span className="gradient-text">Development Cycle</span>
              </h2>
              <p className="text-lg mb-6">
                Our DevOps solutions help businesses streamline their development and operations processes, enabling
                faster delivery, improved quality, and enhanced collaboration.
              </p>
              <p className="text-lg mb-8">
                We implement industry best practices and cutting-edge tools to automate your infrastructure, optimize
                your workflows, and build a culture of continuous improvement.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="DevOps Solutions"
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
            <h2 className="mb-4">Our DevOps Services</h2>
            <p className="text-lg max-w-3xl mx-auto">Comprehensive DevOps solutions tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Strategy</h3>
              <p className="mb-6 text-muted-foreground">
                Develop a comprehensive cloud strategy aligned with your business goals. We help you choose the right
                cloud platforms and services to optimize performance and costs.
              </p>
              <Link href="/devops/cloud-strategy" className="text-primary font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Infrastructure Automation</h3>
              <p className="mb-6 text-muted-foreground">
                Automate your infrastructure deployment and management with Infrastructure as Code (IaC). Reduce manual
                errors and increase deployment speed and reliability.
              </p>
              <Link href="/devops/infrastructure-automation" className="text-primary font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md card-hover">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">CI/CD Implementation</h3>
              <p className="mb-6 text-muted-foreground">
                Set up robust Continuous Integration and Continuous Deployment pipelines. Automate testing and
                deployment to deliver high-quality software faster.
              </p>
              <Link href="/devops/cicd-implementation" className="text-primary font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Approach</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              A systematic methodology to transform your development and operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Assessment</h3>
              <p className="text-muted-foreground">
                Evaluate your current infrastructure, workflows, and pain points to identify opportunities for
                improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy</h3>
              <p className="text-muted-foreground">
                Develop a tailored DevOps roadmap aligned with your business goals and technical requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Implementation</h3>
              <p className="text-muted-foreground">
                Deploy the right tools and processes, and provide training to ensure successful adoption.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Optimization</h3>
              <p className="text-muted-foreground">
                Continuously monitor and refine your DevOps practices to achieve ongoing improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Benefits of Our DevOps Solutions</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Transform your development and operations with our comprehensive DevOps approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Faster Time to Market</h3>
              <p>Accelerate your development cycle and deliver new features and updates more quickly.</p>
            </div>

            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Improved Quality</h3>
              <p>
                Implement automated testing and continuous integration to catch issues early and ensure high-quality
                releases.
              </p>
            </div>

            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Enhanced Collaboration</h3>
              <p>
                Break down silos between development and operations teams to improve communication and collaboration.
              </p>
            </div>

            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Increased Reliability</h3>
              <p>Build robust systems with automated recovery and monitoring to minimize downtime and disruptions.</p>
            </div>

            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cost Optimization</h3>
              <p>Optimize resource utilization and automate manual processes to reduce operational costs.</p>
            </div>

            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Scalability</h3>
              <p>Design infrastructure that can easily scale to accommodate growth and handle peak loads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}

