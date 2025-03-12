"use client"

import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  tags?: string[]
  author: string
  authorRole: string
  authorImage: string
  date: string
  image: string
  slug: string
}

interface BlogCardProps {
  post: BlogPost
  onCategoryClick?: () => void
}

const BlogCard = ({ post, onCategoryClick }: BlogCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <button
            onClick={onCategoryClick}
            className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded hover:bg-primary/20 transition-colors"
          >
            {post.category}
          </button>
          <span className="mx-2 text-muted-foreground">•</span>
          <span className="text-muted-foreground text-sm">{post.date}</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="block group">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
        </Link>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={post.authorImage || "/placeholder.svg"}
              alt={post.author}
              width={32}
              height={32}
              className="rounded-full mr-2"
            />
            <div>
              <p className="text-sm font-medium">{post.author}</p>
              <p className="text-xs text-muted-foreground">{post.authorRole}</p>
            </div>
          </div>
          <Link href={`/blog/${post.slug}`} className="text-primary text-sm font-medium hover:underline">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

