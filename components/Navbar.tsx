"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="SpikeReach Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-xl font-bold">SpikeReach</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isActive("/") ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/devops"
              className={`font-medium transition-colors ${
                isActive("/devops") ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              DevOps
            </Link>
            <Link
              href="/ai"
              className={`font-medium transition-colors ${
                isActive("/ai") ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              AI
            </Link>
            <Link
              href="/marketing"
              className={`font-medium transition-colors ${
                isActive("/marketing")
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Marketing
            </Link>
            <Link
              href="/blog"
              className={`font-medium transition-colors ${
                isActive("/blog") ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <Link href="/contact" className="button-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <button className="text-foreground focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-medium py-2 ${
                  isActive("/") ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/devops"
                className={`font-medium py-2 ${
                  isActive("/devops") ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                DevOps
              </Link>
              <Link
                href="/ai"
                className={`font-medium py-2 ${
                  isActive("/ai") ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                AI
              </Link>
              <Link
                href="/marketing"
                className={`font-medium py-2 ${
                  isActive("/marketing") ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Marketing
              </Link>
              <Link
                href="/blog"
                className={`font-medium py-2 ${
                  isActive("/blog") ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`font-medium py-2 ${
                  isActive("/contact") ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="button-primary w-full text-center mt-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

