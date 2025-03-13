import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/PageHeader"
import CtaSection from "@/components/home/CtaSection"

export const metadata = {
  title: "Machine Learning Solutions | Spikereach",
  description: "Custom machine learning solutions to analyze data, identify patterns, and make predictions for your business.",
}

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Machine Learning Solutions"
        subtitle="Harness the power of data with our custom machine learning solutions"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="mb-6">
                Transform Your Data into <span className="gradient-text">Actionable Insights</span>
              </h2>
              <p className="text-lg mb-6">
                Our machine learning solutions help businesses leverage their data to identify patterns, make predictions, and automate decision-making processes.
              </p>
              <p className="text-lg mb-8">
                Whether you're looking to optimize operations, personalize customer experiences, or gain competitive intelligence, our custom machine learning models deliver results that drive business growth.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Machine Learning Solutions"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Key Features</h2>
            <p className="text-lg max-w-3xl mx-auto">Our machine learning solutions offer powerful capabilities to transform your business</p>
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
              <p className="mb-6 text-muted-foreground">
                Forecast future trends, customer behaviors, and business outcomes with high accuracy using historical data and advanced algorithms.
              </p>
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Customer Segmentation</h3>
              <p className="mb-6 text-muted-foreground">
                Identify distinct customer groups based on behavior, preferences, and demographics to enable targeted marketing and personalized experiences.
              </p>
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Anomaly Detection</h3>
              <p className="mb-6 text-muted-foreground">
                Automatically identify unusual patterns or outliers in your data to detect fraud, prevent system failures, and address issues before they escalate.
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
              Why choose our machine learning solutions for your business
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Increased Efficiency</h3>
                <p className="text-muted-foreground">
                  Automate repetitive tasks and streamline operations, allowing your team to focus on strategic initiatives that drive growth.
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Enhanced Decision Making</h3>
                <p className="text-muted-foreground">
                  Make data-driven decisions with confidence, backed by accurate predictions and actionable insights from your data.
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
                <h3 className="text-xl font-bold mb-2">Cost Reduction</h3>
                <p className="text-muted-foreground">
                  Optimize resource allocation, reduce waste, and identify cost-saving opportunities through predictive analytics and process optimization.
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Customer Experiences</h3>
                <p className="text-muted-foreground">
                  Deliver tailored experiences to your customers based on their preferences, behaviors, and needs, increasing satisfaction and loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Use Cases</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Real-world applications of our machine learning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Demand Forecasting</h3>
              <p className="mb-6">
                Predict future demand for products or services with high accuracy, enabling optimized inventory management and resource allocation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Retail inventory optimization</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Manufacturing capacity planning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Staffing and resource allocation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Fraud Detection</h3>
              <p className="mb-6">
                Identify suspicious activities and potential fraud in real-time, protecting your business and customers from financial losses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Financial transaction monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Insurance claim analysis</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Account security and authentication</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Recommendation Systems</h3>
              <p className="mb-6">
                Suggest relevant products, content, or services to users based on their preferences and behaviors, increasing engagement and sales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>E-commerce product recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Content personalization</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cross-selling and upselling opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Approach</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              A systematic methodology to deliver effective machine learning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-custom-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Data Assessment</h3>
              <p className="text-muted-foreground">
                Evaluate your data sources, quality, and structure to identify opportunities and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-custom-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Solution Design</h3>
              <p className="text-muted-foreground">
                Develop a tailored machine learning strategy aligned with your business goals and data capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-custom-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Model Development</h3>
              <p className="text-muted-foreground">
                Build, train, and validate custom machine learning models using your data and state-of-the-art algorithms.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-custom-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Deployment & Optimization</h3>
              <p className="text-muted-foreground">
                Implement the solution in your environment and continuously refine it to improve performance and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}
