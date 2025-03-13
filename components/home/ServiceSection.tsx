import Link from "next/link";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            We offer comprehensive solutions in AI, DevOps, and Marketing to
            help businesses innovate, optimize, and grow in today's competitive
            landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* DevOps Service */}
          <div className="bg-card rounded-lg shadow-md overflow-hidden card-hover">
            <div className="h-48 relative">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="DevOps Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">DevOps Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Streamline your development and operations with our expert
                DevOps solutions. From cloud strategy to infrastructure
                automation, we help you build efficient, scalable, and reliable
                systems.
              </p>
              <span className="flex justify-end">
                <Link
                  href="/devops"
                  className="gradient-text font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </span>
            </div>
          </div>

          {/* AI Service */}
          <div className="bg-card rounded-lg shadow-md overflow-hidden card-hover">
            <div className="h-48 relative">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="AI Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">AI Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Harness the power of artificial intelligence to transform your
                business. Our AI solutions help you automate processes, gain
                insights from data, and create innovative products and services.
              </p>
              <span className="flex justify-end">
                <Link
                  href="/ai"
                  className="gradient-text font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </span>
            </div>
          </div>

          {/* Marketing Service */}
          <div className="bg-card rounded-lg shadow-md overflow-hidden card-hover">
            <div className="h-48 relative">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Marketing Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Marketing Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Elevate your brand and reach your target audience with our
                strategic marketing solutions. From SEO to content marketing, we
                help you build a strong online presence and drive growth.
              </p>
              <span className="flex justify-end">
                <Link
                  href="/marketing"
                  className="gradient-text font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
