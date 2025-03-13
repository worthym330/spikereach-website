import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/PageHeader"
import CtaSection from "@/components/home/CtaSection"

export const metadata = {
  title: "Cloud Strategy | Spikereach",
  description:
    "Develop a comprehensive cloud strategy aligned with your business goals with our expert cloud consulting services.",
}

export default function CloudStrategyPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Cloud Strategy"
        subtitle="Develop a comprehensive cloud strategy aligned with your business goals"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="mb-6">
                Strategic <span className="gradient-text">Cloud Adoption</span>
              </h2>
              <p className="text-lg mb-6">
                Our cloud strategy services help businesses develop a comprehensive approach to cloud adoption that
                aligns with their business objectives, technical requirements, and organizational capabilities.
              </p>
              <p className="text-lg mb-8">
                Whether you're just beginning your cloud journey or looking to optimize your existing cloud
                infrastructure, we provide expert guidance to help you maximize the benefits of cloud computing while
                minimizing risks and costs.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Cloud Strategy"
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
            <h2 className="mb-4">Our Cloud Strategy Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive cloud strategy services tailored to your business needs
            </p>
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Readiness Assessment</h3>
              <p className="mb-6 text-muted-foreground">
                Evaluate your organization's technical, operational, and cultural readiness for cloud adoption,
                identifying potential challenges and opportunities.
              </p>
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Platform Selection</h3>
              <p className="mb-6 text-muted-foreground">
                Analyze and recommend the optimal cloud platforms (AWS, Azure, Google Cloud, etc.) and service models
                (IaaS, PaaS, SaaS) based on your specific requirements.
              </p>
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Cost Optimization</h3>
              <p className="mb-6 text-muted-foreground">
                Develop strategies to optimize cloud spending, including resource rightsizing, reserved instance
                planning, and cost allocation frameworks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Migration Planning</h3>
              <p className="mb-6 text-muted-foreground">
                Create a detailed roadmap for migrating applications and infrastructure to the cloud, including
                prioritization, timelines, and risk mitigation strategies.
              </p>
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Security Strategy</h3>
              <p className="mb-6 text-muted-foreground">
                Develop comprehensive security frameworks and policies for your cloud environment, ensuring data
                protection, compliance, and risk management.
              </p>
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Governance Framework</h3>
              <p className="mb-6 text-muted-foreground">
                Establish policies, procedures, and controls for managing your cloud environment, ensuring compliance,
                cost control, and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Benefits</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Why invest in a comprehensive cloud strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-custom-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Accelerated Innovation</h3>
                <p className="text-muted-foreground">
                  A well-planned cloud strategy enables faster innovation by providing access to cutting-edge
                  technologies and services without the need for significant upfront investment.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-12 w-12 bg-custom-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cost Optimization</h3>
                <p className="text-muted-foreground">
                  Strategic cloud adoption helps optimize costs by aligning resources with actual needs, leveraging
                  pay-as-you-go models, and eliminating unnecessary capital expenditures.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-12 w-12 bg-custom-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scalability and Flexibility</h3>
                <p className="text-muted-foreground">
                  A comprehensive cloud strategy enables your business to scale resources up or down based on demand,
                  providing the agility needed to respond to changing market conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-12 w-12 bg-custom-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Enhanced Security and Compliance</h3>
                <p className="text-muted-foreground">
                  A well-designed cloud strategy includes robust security measures and compliance frameworks, often
                  exceeding what most organizations can implement on-premises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Approach</h2>
            <p className="text-lg max-w-3xl mx-auto">A systematic methodology to develop your cloud strategy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery</h3>
              <p>
                Assess your current infrastructure, applications, business goals, and challenges to understand your
                unique requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy Development</h3>
              <p>
                Create a tailored cloud strategy that aligns with your business objectives, including platform
                selection, migration approach, and governance framework.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Roadmap Creation</h3>
              <p>
                Develop a detailed implementation roadmap with clear milestones, timelines, and resource requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Implementation Support</h3>
              <p>
                Provide guidance and expertise throughout the implementation process, ensuring successful execution of
                your cloud strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Success Stories</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              See how our cloud strategy services have helped businesses transform their operations
            </p>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Financial Services Case Study"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4">Financial Services Firm Achieves 40% Cost Reduction</h3>
                <p className="text-muted-foreground mb-6">
                  A leading financial services firm was struggling with rising infrastructure costs and limited
                  scalability. We developed a comprehensive cloud strategy that included a phased migration to AWS,
                  implementation of auto-scaling policies, and reserved instance planning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-secondary p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary">40%</p>
                    <p className="text-sm">Cost Reduction</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary">99.99%</p>
                    <p className="text-sm">Uptime</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary">3x</p>
                    <p className="text-sm">Faster Deployment</p>
                  </div>
                </div>
                {/* <Link href="/case-studies/financial-cloud" className="text-primary font-medium hover:underline">
                  Read Full Case Study →
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}

