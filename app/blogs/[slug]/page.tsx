import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Calendar, Clock } from 'lucide-react'
import { Navbar } from '../../../components/layout/Navbar'
import { Footer } from '../../../components/layout/Footer'
import { RelatedPosts } from '../../../components/blogs/RelatedPosts'
import blogsData from '../../../data/blogs.json'
import { getPostBySlug, getRelatedPosts, type BlogPostItem } from '../../../utils/blogHelpers'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const posts = blogsData as BlogPostItem[]
  const post = getPostBySlug(posts, slug)
  if (!post) return { title: 'Post not found' }
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
    alternates: { canonical: `https://designient.com/blogs/${post.slug}` },
    robots: { index: true, follow: true },
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
  if (!post) notFound()

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
    <div className="min-h-screen bg-void">
      <Navbar />
      <main id="main-content" role="main" className="pb-24">
        <article className="max-w-container mx-auto container-px pt-12">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-10 text-caption text-ash">
              <Link href="/" className="hover:text-silver transition-colors">Home</Link>
              <ChevronRight size={12} strokeWidth={1.5} />
              <Link href="/blogs" className="hover:text-silver transition-colors">Blog</Link>
              <ChevronRight size={12} strokeWidth={1.5} />
              <span className="text-ivory line-clamp-1">{post.title}</span>
            </nav>

            {/* Category */}
            {post.category ? (
              <span className="inline-block mb-5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.08em] uppercase text-amber bg-amber-10 border border-amber/20">
                {post.category}
              </span>
            ) : null}

            {/* Title */}
            <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] leading-[1.08] tracking-[-0.025em] text-ivory text-balance mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-5 mb-10 text-body-sm text-ash">
              {post.author ? (
                <span className="text-silver">{post.author.name}</span>
              ) : (
                <span className="text-silver">Designient Team</span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} strokeWidth={1.5} />
                {formatDate(post.publishedDate)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} strokeWidth={1.5} />
                {post.readingTime}
              </span>
            </div>

            {/* Cover image */}
            {post.coverImage ? (
              <div className="relative w-full rounded-xl overflow-hidden mb-12 aspect-[16/9] border-subtle">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
            ) : null}

            {/* Content */}
            <div
              className="prose-dark"
              dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
            />

            <div className="mt-16 pt-8 border-t border-white/[0.06]">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-amber hover:text-amber-glow transition-colors text-[15px] font-medium"
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
