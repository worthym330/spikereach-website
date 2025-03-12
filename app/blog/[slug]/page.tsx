"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Bookmark,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// This would typically come from a database or CMS
const blogPosts = [
  {
    slug: "future-of-ai-in-business",
    title: "The Future of AI in Business: Trends to Watch",
    content: `
      <p>Artificial Intelligence is rapidly transforming the business landscape, revolutionizing how companies operate, make decisions, and engage with customers. As we move forward, several key trends are emerging that will shape the future of AI in business.</p>
      
      <h2>1. Hyper-Personalization at Scale</h2>
      <p>AI is enabling businesses to deliver personalized experiences to millions of customers simultaneously. By analyzing vast amounts of data, AI systems can predict individual preferences and behaviors with remarkable accuracy, allowing companies to tailor their products, services, and communications to each customer's unique needs and preferences.</p>
      
      <h2>2. Autonomous Decision-Making</h2>
      <p>As AI systems become more sophisticated, they are increasingly capable of making complex decisions without human intervention. From automated inventory management to algorithmic trading, businesses are delegating more decision-making authority to AI systems, freeing up human workers to focus on more strategic tasks.</p>
      
      <h2>3. Enhanced Predictive Analytics</h2>
      <p>AI-powered predictive analytics are helping businesses anticipate market trends, customer behaviors, and operational challenges before they occur. By leveraging machine learning algorithms and historical data, companies can make more informed decisions and stay ahead of the competition.</p>
      
      <h2>4. Seamless Human-AI Collaboration</h2>
      <p>The future of AI in business is not about replacing humans but enhancing their capabilities. We're seeing the emergence of collaborative intelligence, where humans and AI systems work together, each bringing their unique strengths to the table. This collaboration is leading to unprecedented levels of productivity and innovation.</p>
      
      <h2>5. Ethical AI and Governance</h2>
      <p>As AI becomes more pervasive in business operations, ethical considerations and governance frameworks are becoming increasingly important. Companies are investing in responsible AI practices, ensuring that their AI systems are transparent, fair, and aligned with human values.</p>
      
      <p>The future of AI in business is bright, with endless possibilities for innovation and growth. Companies that embrace these trends and adapt their strategies accordingly will be well-positioned to thrive in the AI-driven economy of tomorrow.</p>
    `,
    excerpt: "Explore the emerging AI trends that are reshaping how businesses operate and compete in the digital age.",
    category: "AI",
    tags: ["AI", "Business", "Digital Transformation", "Machine Learning", "Automation"],
    author: "Jane Smith",
    authorRole: "AI Specialist",
    authorBio:
      "Jane Smith is a leading AI specialist with over 10 years of experience in implementing AI solutions for Fortune 500 companies. She holds a Ph.D. in Machine Learning from Stanford University and is a frequent speaker at technology conferences worldwide.",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200",
    relatedPosts: [
      "machine-learning-transforming-customer-service",
      "ethical-considerations-ai-development",
      "data-driven-marketing-strategy",
    ],
  },
  {
    slug: "machine-learning-transforming-customer-service",
    title: "How Machine Learning is Transforming Customer Service",
    excerpt:
      "Explore how AI and machine learning technologies are revolutionizing customer service and support operations.",
    content: "Machine learning is revolutionizing customer service in numerous ways...",
    category: "AI",
    tags: ["AI", "Machine Learning", "Customer Service"],
    author: "David Chen",
    authorRole: "ML Engineer",
    authorBio:
      "David Chen is a Machine Learning Engineer with expertise in natural language processing and conversational AI.",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 28, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg?height=600&width=1200",
    relatedPosts: [
      "future-of-ai-in-business",
      "ethical-considerations-ai-development",
      "data-driven-marketing-strategy",
    ],
  },
  {
    slug: "ethical-considerations-ai-development",
    title: "Ethical Considerations in AI Development",
    excerpt:
      "Explore the ethical challenges and considerations that developers and organizations face when building AI systems.",
    content: "As AI becomes more prevalent in our society, ethical considerations are increasingly important...",
    category: "AI",
    tags: ["AI", "Ethics", "Digital Transformation"],
    author: "Priya Sharma",
    authorRole: "AI Ethics Researcher",
    authorBio:
      "Priya Sharma is an AI Ethics Researcher focused on developing frameworks for responsible AI development.",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "January 25, 2025",
    readTime: "10 min read",
    image: "/placeholder.svg?height=600&width=1200",
    relatedPosts: [
      "future-of-ai-in-business",
      "machine-learning-transforming-customer-service",
      "data-driven-marketing-strategy",
    ],
  },
  {
    slug: "data-driven-marketing-strategy",
    title: "Building a Data-Driven Marketing Strategy",
    excerpt: "Learn how to leverage data analytics to create more effective and targeted marketing campaigns.",
    content: "In today's digital landscape, data-driven marketing strategies are essential for success...",
    category: "Marketing",
    tags: ["Marketing", "Data Science", "Business"],
    author: "Sophia Lee",
    authorRole: "Marketing Analytics Manager",
    authorBio:
      "Sophia Lee specializes in marketing analytics and has helped numerous companies implement data-driven strategies.",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 5, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg?height=600&width=1200",
    relatedPosts: [
      "future-of-ai-in-business",
      "machine-learning-transforming-customer-service",
      "ethical-considerations-ai-development",
    ],
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)

  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map((slug) => blogPosts.find((p) => p.slug === slug)).filter(Boolean)
    : []

  // Find previous and next posts (for navigation)
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  // Toggle bookmark
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // In a real app, you would save this to localStorage or a database
  }

  // Share functionality
  const sharePost = (platform: string) => {
    const url = window.location.href
    const title = post.title

    let shareUrl = ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`
        break
      default:
        break
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank")
    }

    setShowShareOptions(false)
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] bg-black">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center mb-4">
                <Link
                  href={`/blog?category=${post.category}`}
                  className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full hover:bg-primary/30 transition-colors"
                >
                  {post.category}
                </Link>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
              <div className="flex flex-wrap items-center text-white/80 gap-4 md:gap-6">
                <div className="flex items-center">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-white">{post.author}</p>
                    <p className="text-sm">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3">
            <div className="max-w-3xl">
              {/* Social Sharing Sidebar - Desktop */}
              <div className="hidden md:block fixed left-4 top-1/3 space-y-4">
                <button
                  onClick={() => sharePost("facebook")}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-card hover:bg-primary/10 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={() => sharePost("twitter")}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-card hover:bg-primary/10 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={() => sharePost("linkedin")}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-card hover:bg-primary/10 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={() => sharePost("email")}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-card hover:bg-primary/10 transition-colors"
                  aria-label="Share via Email"
                >
                  <Mail className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={toggleBookmark}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                    isBookmarked ? "bg-primary/20 text-primary" : "bg-card hover:bg-primary/10 text-foreground"
                  }`}
                  aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
                >
                  <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Social Sharing - Mobile */}
              <div className="flex md:hidden items-center justify-between mb-6 border-y border-border py-4">
                <div className="flex items-center">
                  <button
                    onClick={() => setShowShareOptions(!showShareOptions)}
                    className="flex items-center text-sm font-medium"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </button>

                  {showShareOptions && (
                    <div className="flex items-center ml-4 space-x-2">
                      <button
                        onClick={() => sharePost("facebook")}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-card hover:bg-primary/10 transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="h-4 w-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => sharePost("twitter")}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-card hover:bg-primary/10 transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="h-4 w-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => sharePost("linkedin")}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-card hover:bg-primary/10 transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="h-4 w-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => sharePost("email")}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-card hover:bg-primary/10 transition-colors"
                        aria-label="Share via Email"
                      >
                        <Mail className="h-4 w-4 text-foreground" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={toggleBookmark}
                  className={`flex items-center text-sm font-medium ${isBookmarked ? "text-primary" : ""}`}
                  aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
                >
                  <Bookmark className="h-4 w-4 mr-2" fill={isBookmarked ? "currentColor" : "none"} />
                  {isBookmarked ? "Saved" : "Save"}
                </button>
              </div>

              {/* Article Content */}
              <div
                className="prose dark:prose-invert max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mb-12">
                <h3 className="text-lg font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-card p-6 rounded-lg shadow-sm mb-12">
                <div className="flex items-start">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    width={80}
                    height={80}
                    className="rounded-full mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.authorRole}</p>
                    <p className="text-muted-foreground">{post.authorBio}</p>
                  </div>
                </div>
              </div>

              {/* Post Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      <span>Previous Article</span>
                    </div>
                    <h4 className="font-bold group-hover:text-primary transition-colors">{prevPost.title}</h4>
                  </Link>
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-right"
                  >
                    <div className="flex items-center justify-end text-sm text-muted-foreground mb-2">
                      <span>Next Article</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                    <h4 className="font-bold group-hover:text-primary transition-colors">{nextPost.title}</h4>
                  </Link>
                )}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Related Posts */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-6">Related Articles</h3>
              <div className="space-y-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost?.slug} className="flex items-start">
                    <Image
                      src={relatedPost?.image || "/placeholder.svg"}
                      alt={relatedPost?.title || ""}
                      width={80}
                      height={60}
                      className="rounded-md object-cover mr-4 w-20 h-16"
                    />
                    <div>
                      <Link
                        href={`/blog/${relatedPost?.slug}`}
                        className="font-medium hover:text-primary transition-colors line-clamp-2"
                      >
                        {relatedPost?.title}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1">{relatedPost?.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {["AI", "DevOps", "Marketing", "Technology", "Business"].map((category) => (
                  <li key={category} className="flex justify-between items-center">
                    <Link
                      href={`/blog?category=${category}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-primary/10 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Get the latest articles and insights delivered straight to your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

