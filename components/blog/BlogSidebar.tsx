"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

const categories = [
  { name: "AI", count: 12 },
  { name: "DevOps", count: 8 },
  { name: "Marketing", count: 10 },
  { name: "Technology", count: 15 },
  { name: "Business", count: 7 },
]

const popularPosts = [
  {
    title: "The Future of AI in Business: Trends to Watch",
    slug: "future-of-ai-in-business",
    date: "March 15, 2025",
  },
  {
    title: "DevOps Best Practices for Scaling Startups",
    slug: "devops-best-practices-scaling-startups",
    date: "March 10, 2025",
  },
  {
    title: "Content Marketing Strategies That Drive Conversion",
    slug: "content-marketing-strategies-conversion",
    date: "March 5, 2025",
  },
]

const tags = [
  "AI",
  "Machine Learning",
  "DevOps",
  "Cloud",
  "Marketing",
  "SEO",
  "Content Strategy",
  "Automation",
  "Digital Transformation",
  "Data Science",
]

interface BlogSidebarProps {
  onSearch: (query: string) => void
  onCategoryFilter: (category: string) => void
  onTagFilter: (tag: string) => void
  activeCategory?: string
  activeTag?: string
}

const BlogSidebar = ({ onSearch, onCategoryFilter, onTagFilter, activeCategory, activeTag }: BlogSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div className="lg:w-1/3 space-y-8">
      {/* Search */}
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4">Search</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pr-10 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Search size={18} />
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <button
              onClick={() => onCategoryFilter("")}
              className={`text-foreground hover:text-primary transition-colors ${!activeCategory ? "font-medium text-primary" : ""}`}
            >
              All Categories
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.name} className="flex justify-between items-center">
              <button
                onClick={() => onCategoryFilter(category.name)}
                className={`text-foreground hover:text-primary transition-colors ${activeCategory === category.name ? "font-medium text-primary" : ""}`}
              >
                {category.name}
              </button>
              <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                {category.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4">Popular Posts</h3>
        <ul className="space-y-4">
          {popularPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block">
                <h4 className="font-medium hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onTagFilter("")}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              !activeTag
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagFilter(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
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
    </div>
  )
}

export default BlogSidebar

