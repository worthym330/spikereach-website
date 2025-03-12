import Image from "next/image"
import PageHeader from "@/components/PageHeader"

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John has over 20 years of experience in tech and is passionate about leveraging AI to solve complex business problems.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jane is a veteran software engineer with a focus on scalable architecture and cutting-edge AI implementations.",
  },
  {
    name: "Mike Johnson",
    role: "Head of DevOps",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Mike specializes in streamlining development processes and implementing robust, scalable infrastructure solutions.",
  },
  {
    name: "Sarah Lee",
    role: "Chief Marketing Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah brings a wealth of experience in digital marketing and has a track record of driving growth for tech companies.",
  },
  {
    name: "David Chen",
    role: "Lead AI Researcher",
    image: "/placeholder.svg?height=300&width=300",
    bio: "David is at the forefront of AI research, focusing on developing practical applications for businesses across industries.",
  },
  {
    name: "Emily Taylor",
    role: "Head of Customer Success",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Emily ensures our clients get the most out of our solutions, with a focus on long-term partnerships and client satisfaction.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="About Spikereach"
        subtitle="Transforming businesses with cutting-edge AI, DevOps, and Marketing solutions"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At Spikereach, we're on a mission to empower businesses with the latest advancements in AI, DevOps, and
              Marketing. We believe that by combining these three pillars, we can help companies innovate faster,
              operate more efficiently, and reach their full potential in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, Spikereach was born out of a vision to bridge the gap between cutting-edge technology
                and practical business applications. Our founders, with decades of experience in tech, saw an
                opportunity to help businesses leverage the power of AI, streamline their operations with DevOps, and
                amplify their reach through data-driven marketing.
              </p>
              <p className="text-lg text-muted-foreground">
                Since then, we've grown into a team of passionate experts, each bringing unique skills and perspectives
                to the table. Together, we're committed to driving innovation and delivering measurable results for our
                clients.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Spikereach team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-custom-gradient p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p>We constantly push the boundaries of what's possible in AI, DevOps, and Marketing.</p>
              </div>
              <div className="bg-custom-gradient p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p>We believe in the power of teamwork, both within our company and with our clients.</p>
              </div>
              <div className="bg-custom-gradient p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Impact</h3>
                <p>We measure our success by the tangible results we deliver for our clients.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-custom-gradient text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg mb-8">
              We're always looking for talented individuals who are passionate about AI, DevOps, and Marketing. If
              you're excited about pushing the boundaries of what's possible, we'd love to hear from you.
            </p>
            <a
              href="/careers"
              className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

