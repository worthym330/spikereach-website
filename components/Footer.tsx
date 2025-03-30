import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              {/* <Image
                src="/placeholder.svg?height=40&width=40"
                alt="SpikeReach Logo"
                width={40}
                height={40}
                className="mr-3"
              /> */}
              <span className="text-xl font-bold gradient-text">SpikeReach</span>
            </div>
            <p className="mb-6">Transforming businesses with cutting-edge AI, DevOps, and Marketing solutions.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61555829081054" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              {/* <a href="#" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a> */}
              <a href="https://www.linkedin.com/company/spikereach1/" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/spikereach/" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/devops" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors">
                  DevOps
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors">
                  AI
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-[#fd1d1d] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-foreground/60 flex-shrink-0 mt-1" />
                <span className="text-foreground/60">
                Goregoan West,
              <br />
              Mumbai, Maharashtra,
              <br />
              India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-foreground/60 flex-shrink-0" />
                <a
                href="tel:+918356070349"
                className="text-foreground/60 hover:text-[#fd1d1d] transition-colors"
              >
                +91 83560 70349
              </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-foreground/60 flex-shrink-0" />
                <a
                  href="mailto:team@spikereach.com"
                  className="text-foreground/60 hover:text-[#fd1d1d] transition-colors"
                >
                  team@spikereach.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-lg font-bold mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-foreground/60 mb-4">
              Stay updated with the latest insights and news in AI, DevOps, and Marketing.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-background/10 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} SpikeReach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

