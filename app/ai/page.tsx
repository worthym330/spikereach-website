import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "AI Solutions | SpikeReach",
  description:
    "Cutting-edge AI solutions to transform your business. Machine learning, natural language processing, computer vision, and more.",
};

export default function AIPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="AI Solutions"
        subtitle="Cutting-edge artificial intelligence solutions to transform your business"
        backgroundImage="/images/Designer.jpeg"
      />

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="mb-6">
                Harness the Power of{" "}
                <span className="gradient-text">Artificial Intelligence</span>
              </h2>
              <p className="text-lg mb-6">
                Our AI solutions help businesses leverage the latest
                advancements in artificial intelligence to automate processes,
                gain valuable insights, and create innovative products and
                services.
              </p>
              <p className="text-lg mb-8">
                We combine deep technical expertise with a thorough
                understanding of business challenges to deliver AI solutions
                that drive real-world results.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/Designer (4).jpeg"
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
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
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
                Develop custom machine learning models to analyze data, identify
                patterns, and make predictions that drive business decisions and
                automation.
              </p>
              {/* <Link
                href="/ai/machine-learning"
                className="gradient-text dark:text-purple-400 font-medium hover:underline flex justify-end"
              >
                Learn More →
              </Link> */}
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
              <h3 className="text-xl font-bold mb-4">
                Natural Language Processing
              </h3>
              <p className="mb-6 text-muted-foreground">
                Build intelligent systems that understand, interpret, and
                generate human language, enabling chatbots, sentiment analysis,
                and content generation.
              </p>
              {/* <Link
                href="/ai/nlp"
                className="gradient-text dark:text-purple-400 font-medium hover:underline"
              >
                Learn More →
              </Link> */}
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
                Implement systems that can analyze and understand visual
                information from images and videos, enabling object detection,
                facial recognition, and visual inspection.
              </p>
              {/* <Link
                href="/ai/computer-vision"
                className="gradient-text dark:text-purple-400 font-medium hover:underline"
              >
                Learn More →
              </Link> */}
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
                src="/images/RetailInventoryOptimization.png"
                alt="Retail AI Case Study"
                width={600}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Retail Inventory Optimization
                </h3>
                <p className="mb-6 text-muted-foreground">
                  We developed a machine learning system for a retail chain that
                  predicts inventory needs based on historical sales data,
                  seasonal trends, and external factors. The solution reduced
                  stockouts by 35% and decreased excess inventory by 28%.
                </p>
                {/* <Link
                  href="/case-studies/retail-ai"
                  className="gradient-text font-medium hover:underline"
                >
                  Read Case Study →
                </Link> */}
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/HealthcareDiagnosticAssistant.jpg"
                alt="Healthcare AI Case Study"
                width={600}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Healthcare Diagnostic Assistant
                </h3>
                <p className="mb-6 text-muted-foreground">
                  We built an AI-powered diagnostic assistant for a healthcare
                  provider that analyzes medical images to detect potential
                  issues. The system achieved 94% accuracy in early detection,
                  helping doctors make faster and more accurate diagnoses.
                </p>
                {/* <Link
                  href="/case-studies/healthcare-ai"
                  className="gradient-text dark:text-purple-400 font-medium hover:underline"
                >
                  Read Case Study →
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our AI Technology Stack</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build powerful AI
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="h-20 w-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 534.01 508.99"
                >
                  <defs>
                    <style>{`.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:url(#linear-gradient);}.cls-4{clip-path:url(#clip-path-2);}.cls-5{fill:url(#linear-gradient-2);}`}</style>
                    <clipPath id="clip-path" transform="translate(23.09 1.92)">
                      <polygon
                        className="cls-1"
                        points="452.23 123.16 235.73 0 235.73 506.11 322.33 456.07 322.33 313.67 387.76 351.2 386.8 254.02 322.33 216.49 322.33 159.72 452.23 235.73 452.23 123.16"
                      />
                    </clipPath>
                    <linearGradient
                      id="linear-gradient"
                      x1="-20.21"
                      y1="-48.36"
                      x2="510.92"
                      y2="-48.36"
                      gradientTransform="matrix(1, 0, 0, -1, 0, 204.21)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ff6f00" />
                      <stop offset="1" stopColor="#ffa800" />
                    </linearGradient>
                    <clipPath
                      id="clip-path-2"
                      transform="translate(23.09 1.92)"
                    >
                      <polygon
                        className="cls-1"
                        points="0 123.16 216.49 0 216.49 506.11 129.89 456.07 129.89 159.72 0 235.73 0 123.16"
                      />
                    </clipPath>
                    <linearGradient
                      id="linear-gradient-2"
                      x1="-23.09"
                      y1="-48.36"
                      x2="508.03"
                      y2="-48.36"
                      xlinkHref="#linear-gradient"
                    />
                  </defs>
                  <title>google-tensorflow</title>
                  <g className="cls-2">
                    <path
                      className="cls-3"
                      d="M-20.21-1.92H510.92v509H-20.21Z"
                      transform="translate(23.09 1.92)"
                    />
                  </g>
                  <g className="cls-4">
                    <path
                      className="cls-5"
                      d="M-23.09-1.92H508v509H-23.09Z"
                      transform="translate(23.09 1.92)"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold gradient-text">TensorFlow</h3>
            </div>

            <div className="text-center p-6">
              <div className="h-20 w-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    fill="#EE4C2C"
                    d="M100.1 38.3l-9.2 9.2c15.1 15.1 15.1 39.4 0 54.3-15.1 15.1-39.4 15.1-54.3 0-15.1-15.1-15.1-39.4 0-54.3l24-24 3.4-3.4V2L27.8 38.2C7.7 58.3 7.7 90.8 27.8 111s52.6 20.1 72.4 0c20.1-20.2 20.1-52.5-.1-72.7z"
                  />
                  <circle
                    fill="#EE4C2C"
                    transform="rotate(-88.939 82.069 29.398) scale(.99997)"
                    cx="82.1"
                    cy="29.4"
                    r="6.7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold gradient-text">PyTorch</h3>
            </div>

            <div className="text-center p-6">
              <div className="h-20 w-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                >
                  <path
                    d="M474.123 209.81c11.525-34.577 7.569-72.423-10.838-103.904-27.696-48.168-83.433-72.94-137.794-61.414a127.14 127.14 0 00-95.475-42.49c-55.564 0-104.936 35.781-122.139 88.593-35.781 7.397-66.574 29.76-84.637 61.414-27.868 48.167-21.503 108.72 15.826 150.007-11.525 34.578-7.569 72.424 10.838 103.733 27.696 48.34 83.433 73.111 137.966 61.585 24.084 27.18 58.833 42.835 95.303 42.663 55.564 0 104.936-35.782 122.139-88.594 35.782-7.397 66.574-29.76 84.465-61.413 28.04-48.168 21.676-108.722-15.654-150.008v-.172zm-39.567-87.218c11.01 19.267 15.139 41.803 11.354 63.65-.688-.516-2.064-1.204-2.924-1.72l-101.152-58.49a16.965 16.965 0 00-16.687 0L206.621 194.5v-50.232l97.883-56.597c45.587-26.32 103.732-10.666 130.052 34.921zm-227.935 104.42l49.888-28.9 49.887 28.9v57.63l-49.887 28.9-49.888-28.9v-57.63zm23.223-191.81c22.364 0 43.867 7.742 61.07 22.02-.688.344-2.064 1.204-3.097 1.72L186.666 117.26c-5.161 2.925-8.258 8.43-8.258 14.45v136.934l-43.523-25.116V130.333c0-52.64 42.491-95.13 95.131-95.302l-.172.172zM52.14 168.697c11.182-19.268 28.557-34.062 49.544-41.803V247.14c0 6.02 3.097 11.354 8.258 14.45l118.354 68.295-43.695 25.288-97.711-56.425c-45.415-26.32-61.07-84.465-34.75-130.052zm26.665 220.71c-11.182-19.095-15.139-41.802-11.354-63.65.688.516 2.064 1.204 2.924 1.72l101.152 58.49a16.965 16.965 0 0016.687 0l118.354-68.467v50.232l-97.883 56.425c-45.587 26.148-103.732 10.665-130.052-34.75h.172zm204.54 87.39c-22.192 0-43.867-7.741-60.898-22.02a62.439 62.439 0 003.097-1.72l101.152-58.317c5.16-2.924 8.429-8.43 8.257-14.45V243.527l43.523 25.116v113.022c0 52.64-42.663 95.303-95.131 95.303v-.172zM461.22 343.303c-11.182 19.267-28.729 34.061-49.544 41.63V264.687c0-6.021-3.097-11.526-8.257-14.45L284.893 181.77l43.523-25.116 97.883 56.424c45.587 26.32 61.07 84.466 34.75 130.053l.172.172z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold gradient-text">OpenAI</h3>
            </div>

            <div className="text-center p-6">
              <div className="h-20 w-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/huggingface.svg"
                  alt="Hugging Face"
                  width={80}
                  height={80}
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-bold gradient-text">Hugging Face</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
