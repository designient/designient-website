import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { RelatedPosts } from '../../../components/blogs/RelatedPosts'
import blogsData from '../../../data/blogs.json'
import { getPostBySlug, getRelatedPosts, type BlogPostItem } from '../../../utils/blogHelpers'
import { ChevronRight, Calendar, Clock } from 'react-feather'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const posts = blogsData as BlogPostItem[]
  const post = getPostBySlug(posts, slug)
  if (!post) {
    return { title: 'Post not found' }
  }
  return {
    title: `${post.title} | Designient Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://designient.com/blogs/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
    },
    alternates: {
      canonical: `https://designient.com/blogs/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export async function generateStaticParams() {
  const posts = blogsData as BlogPostItem[]
  return posts.map((p) => ({ slug: p.slug }))
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const posts = blogsData as BlogPostItem[]
  const post = getPostBySlug(posts, slug)
  if (!post) {
    notFound()
  }

  const related = getRelatedPosts(posts, slug, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    coverImage: p.coverImage,
    category: p.category,
    publishedDate: p.publishedDate,
    readingTime: p.readingTime,
  }))

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main id="main-content" role="main" className="pt-24 md:pt-32 pb-16 md:pb-24">
        <article className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-sm" style={{ color: '#6b7280' }}>
              <Link href="/" className="font-body hover:underline">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <Link href="/blogs" className="font-body hover:underline" style={{ color: '#8458B3' }}>
                Blogs
              </Link>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <span className="font-body line-clamp-1" style={{ color: '#1a1a1a' }}>
                {post.title}
              </span>
            </nav>

            <h1
              className="font-display font-bold mb-6 leading-tight"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              }}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-body font-medium"
                style={{ backgroundColor: '#f4e4c1', color: '#8458B3' }}
              >
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-body text-sm" style={{ color: '#6b7280' }}>
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedDate)}
              </span>
              <span className="inline-flex items-center gap-1.5 font-body text-sm" style={{ color: '#6b7280' }}>
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
              {post.author && (
                <span className="font-body text-sm" style={{ color: '#4a4a4a' }}>
                  {post.author.name}
                </span>
              )}
            </div>

            {post.coverImage && (
              <div className="relative w-full rounded-xl overflow-hidden mb-10" style={{ aspectRatio: '16/9', backgroundColor: '#f3f4f6' }}>
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
            )}

            <div
              className="font-body prose prose-lg max-w-none"
              style={{
                color: '#1a1a1a',
                lineHeight: '1.75',
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
                className="blog-post-content [&_a]:underline [&_a]:text-[#8458B3] [&_a:hover]:opacity-80 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-xl [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4"
              />
            </div>

            <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e5e7eb' }}>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 font-body font-semibold hover:underline"
                style={{ color: '#8458B3' }}
              >
                ← Back to all posts
              </Link>
            </div>

            <RelatedPosts posts={related} currentSlug={post.slug} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
