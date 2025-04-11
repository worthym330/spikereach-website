import PageHeader from "@/components/PageHeader"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"

export const metadata = {
  title: "Contact Us | SpikeReach",
  description: "Get in touch with the SpikeReach team for AI, DevOps, and Marketing solutions.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project"
        backgroundImage="/images/contact.jpeg"
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="mb-6">
                Let's Discuss Your <span className="gradient-text">Project</span>
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Fill out the form below, and our team will get back to you within 24 hours to discuss how we can help
                you achieve your business goals.
              </p>

              <ContactForm />
            </div>

            <div className="lg:w-1/2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="h-96 w-full bg-secondary">
        <div className="w-full h-full flex items-center justify-center bg-secondary">
          <p className="text-muted-foreground">Interactive Map Would Be Displayed Here</p>
        </div>
      </section> */}
    </div>
  )
}

