import type { Metadata } from "next"

// This would typically come from a database or CMS
const blogPosts = [
  {
    slug: "future-of-ai-in-business",
    title: "The Future of AI in Business: Trends to Watch",
    excerpt: "Explore the emerging AI trends that are reshaping how businesses operate and compete in the digital age.",
    category: "AI",
  },
  {
    slug: "machine-learning-transforming-customer-service",
    title: "How Machine Learning is Transforming Customer Service",
    excerpt:
      "Explore how AI and machine learning technologies are revolutionizing customer service and support operations.",
    category: "AI",
  },
  {
    slug: "ethical-considerations-ai-development",
    title: "Ethical Considerations in AI Development",
    excerpt:
      "Explore the ethical challenges and considerations that developers and organizations face when building AI systems.",
    category: "AI",
  },
  {
    slug: "data-driven-marketing-strategy",
    title: "Building a Data-Driven Marketing Strategy",
    excerpt: "Learn how to leverage data analytics to create more effective and targeted marketing campaigns.",
    category: "Marketing",
  },
]

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)
  console.log(post,params)

  if (!post) {
    return {
      title: "Post Not Found | SpikeReach Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | SpikeReach Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://SpikeReach.com/blog/${post.slug}`,
      images: [
        {
          url: "/placeholder.svg?height=600&width=1200",
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/placeholder.svg?height=600&width=1200"],
    },
  }
}

