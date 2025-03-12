"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/PageHeader"
import BlogSidebar from "@/components/blog/BlogSidebar"
import BlogCard from "@/components/blog/BlogCard"
import Pagination from "@/components/blog/Pagination"

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends to Watch",
    excerpt: "Explore the emerging AI trends that are reshaping how businesses operate and compete in the digital age.",
    category: "AI",
    tags: ["AI", "Business", "Digital Transformation"],
    author: "Jane Smith",
    authorRole: "AI Specialist",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-ai-in-business",
  },
  {
    id: 2,
    title: "DevOps Best Practices for Scaling Startups",
    excerpt:
      "Learn how to implement effective DevOps practices to support your startup's growth and technical scalability.",
    category: "DevOps",
    tags: ["DevOps", "Cloud", "Automation"],
    author: "Michael Johnson",
    authorRole: "DevOps Engineer",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 10, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "devops-best-practices-scaling-startups",
  },
  {
    id: 3,
    title: "Content Marketing Strategies That Drive Conversion",
    excerpt:
      "Discover proven content marketing approaches that not only engage your audience but also convert them into customers.",
    category: "Marketing",
    tags: ["Marketing", "Content Strategy", "SEO"],
    author: "Sarah Williams",
    authorRole: "Marketing Director",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 5, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "content-marketing-strategies-conversion",
  },
  {
    id: 4,
    title: "How Machine Learning is Transforming Customer Service",
    excerpt:
      "Explore how AI and machine learning technologies are revolutionizing customer service and support operations.",
    category: "AI",
    tags: ["AI", "Machine Learning", "Customer Service"],
    author: "David Chen",
    authorRole: "ML Engineer",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 28, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "machine-learning-transforming-customer-service",
  },
  {
    id: 5,
    title: "Infrastructure as Code: A Comprehensive Guide",
    excerpt:
      "Learn everything you need to know about Infrastructure as Code (IaC) and how to implement it in your organization.",
    category: "DevOps",
    tags: ["DevOps", "Cloud", "Automation"],
    author: "Robert Taylor",
    authorRole: "Cloud Architect",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 20, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "infrastructure-as-code-guide",
  },
  {
    id: 6,
    title: "SEO Strategies for 2025: What's Changed",
    excerpt:
      "Stay ahead of the curve with the latest SEO strategies and algorithm changes that will impact your rankings in 2025.",
    category: "Marketing",
    tags: ["Marketing", "SEO", "Digital Transformation"],
    author: "Emily Rodriguez",
    authorRole: "SEO Specialist",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 15, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "seo-strategies-2025",
  },
  {
    id: 7,
    title: "The Rise of Edge Computing in IoT Applications",
    excerpt: "Discover how edge computing is revolutionizing IoT applications by processing data closer to the source.",
    category: "Technology",
    tags: ["Technology", "IoT", "Cloud"],
    author: "Alex Johnson",
    authorRole: "IoT Specialist",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 10, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "edge-computing-iot-applications",
  },
  {
    id: 8,
    title: "Building a Data-Driven Marketing Strategy",
    excerpt: "Learn how to leverage data analytics to create more effective and targeted marketing campaigns.",
    category: "Marketing",
    tags: ["Marketing", "Data Science", "Business"],
    author: "Sophia Lee",
    authorRole: "Marketing Analytics Manager",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 5, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "data-driven-marketing-strategy",
  },
  {
    id: 9,
    title: "Kubernetes vs. Docker Swarm: Which is Right for You?",
    excerpt:
      "Compare the two most popular container orchestration platforms and determine which one best fits your needs.",
    category: "DevOps",
    tags: ["DevOps", "Cloud", "Containers"],
    author: "James Wilson",
    authorRole: "DevOps Architect",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "January 30, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "kubernetes-vs-docker-swarm",
  },
  {
    id: 10,
    title: "Ethical Considerations in AI Development",
    excerpt:
      "Explore the ethical challenges and considerations that developers and organizations face when building AI systems.",
    category: "AI",
    tags: ["AI", "Ethics", "Digital Transformation"],
    author: "Priya Sharma",
    authorRole: "AI Ethics Researcher",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "January 25, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "ethical-considerations-ai-development",
  },
]

export default function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState("")
  const [activeTag, setActiveTag] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const postsPerPage = 6

  // Filter posts based on category, tag, and search query
  useEffect(() => {
    let result = blogPosts

    // Apply category filter
    if (activeCategory) {
      result = result.filter((post) => post.category === activeCategory)
    }

    // Apply tag filter
    if (activeTag) {
      result = result.filter((post) => post.tags.includes(activeTag))
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    setFilteredPosts(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [activeCategory, activeTag, searchQuery])

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // Featured post is the first post in the filtered list
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null

  // Regular posts exclude the featured post
  const regularPosts = currentPosts.filter((post) => featuredPost && post.id !== featuredPost.id)

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // Handle category filter
  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category)
  }

  // Handle tag filter
  const handleTagFilter = (tag: string) => {
    setActiveTag(tag)
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Blog"
        subtitle="Insights, tips, and trends in AI, DevOps, and Marketing"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Filter Status */}
              {(activeCategory || activeTag || searchQuery) && (
                <div className="mb-8 p-4 bg-secondary rounded-lg">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-muted-foreground">Filters:</span>

                    {activeCategory && (
                      <div className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        <span>Category: {activeCategory}</span>
                        <button
                          onClick={() => setActiveCategory("")}
                          className="ml-2 hover:text-primary/70"
                          aria-label="Remove category filter"
                        >
                          ×
                        </button>
                      </div>
                    )}

                    {activeTag && (
                      <div className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        <span>Tag: {activeTag}</span>
                        <button
                          onClick={() => setActiveTag("")}
                          className="ml-2 hover:text-primary/70"
                          aria-label="Remove tag filter"
                        >
                          ×
                        </button>
                      </div>
                    )}

                    {searchQuery && (
                      <div className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        <span>Search: "{searchQuery}"</span>
                        <button
                          onClick={() => setSearchQuery("")}
                          className="ml-2 hover:text-primary/70"
                          aria-label="Remove search filter"
                        >
                          ×
                        </button>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setActiveCategory("")
                        setActiveTag("")
                        setSearchQuery("")
                      }}
                      className="ml-auto text-sm text-primary hover:underline"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              )}

              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-4">No Articles Found</h2>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any articles matching your search criteria.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("")
                      setActiveTag("")
                      setSearchQuery("")
                    }}
                    className="button-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Featured Post - only show on first page */}
                  {currentPage === 1 && featuredPost && (
                    <div className="mb-16">
                      <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
                      <div className="bg-card rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={featuredPost.image || "/placeholder.svg"}
                          alt={featuredPost.title}
                          width={800}
                          height={400}
                          className="w-full h-80 object-cover"
                        />
                        <div className="p-8">
                          <div className="flex items-center mb-4">
                            <button
                              onClick={() => handleCategoryFilter(featuredPost.category)}
                              className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded hover:bg-primary/20 transition-colors"
                            >
                              {featuredPost.category}
                            </button>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <span className="text-muted-foreground text-sm">{featuredPost.date}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                          <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Image
                                src={featuredPost.authorImage || "/placeholder.svg"}
                                alt={featuredPost.author}
                                width={40}
                                height={40}
                                className="rounded-full mr-3"
                              />
                              <div>
                                <p className="font-medium">{featuredPost.author}</p>
                                <p className="text-sm text-muted-foreground">{featuredPost.authorRole}</p>
                              </div>
                            </div>
                            <Link
                              href={`/blog/${featuredPost.slug}`}
                              className="text-primary font-medium hover:underline"
                            >
                              Read More →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Regular Posts */}
                  <h2 className="text-2xl font-bold mb-8">
                    {currentPage === 1 && featuredPost ? "Latest Articles" : "Articles"}
                    {filteredPosts.length > 0 && (
                      <span className="text-muted-foreground text-lg font-normal ml-2">
                        ({filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"})
                      </span>
                    )}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {regularPosts.map((post) => (
                      <BlogCard key={post.id} post={post} onCategoryClick={() => handleCategoryFilter(post.category)} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <BlogSidebar
              onSearch={handleSearch}
              onCategoryFilter={handleCategoryFilter}
              onTagFilter={handleTagFilter}
              activeCategory={activeCategory}
              activeTag={activeTag}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

