import type { Metadata } from 'next'
export const runtime = 'edge'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { BlogsPageClient } from './BlogsPageClient'
import blogsData from '../../data/blogs.json'
import {
  getFilteredBlogs,
  getFeaturedPost,
  getCategories,
  getAllTags,
  type BlogPostItem,
} from '../../utils/blogHelpers'

export const metadata: Metadata = {
  title: 'The Design Brief — Blog | Designient',
  description:
    'Thoughts on design, AI, careers, and the craft of building beautiful things. Insights from Designient mentors and alumni.',
  openGraph: {
    title: 'The Design Brief — Designient Blog',
    description: 'Thoughts on design, AI, careers, and the craft of building beautiful things.',
    url: 'https://designient.com/blogs',
    type: 'website',
  },
  alternates: { canonical: 'https://designient.com/blogs' },
  robots: { index: true, follow: true },
}

const POSTS_PER_PAGE = 9

interface BlogsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams
  const page = Math.max(1, parseInt((params.page as string) ?? '1', 10) || 1)
  const category = (params.category as string) ?? null
  const tagsParam = params.tags as string | undefined
  const tags = tagsParam ? tagsParam.split(',').filter(Boolean) : []
  const sort = (params.sort as string) ?? 'latest'
  const search = (params.search as string) ?? ''

  const posts = blogsData as BlogPostItem[]
  const featuredPost = getFeaturedPost(posts)
  const { posts: filteredPosts, totalPosts, totalPages } = getFilteredBlogs(posts, {
    category, tags, sort, search, page, perPage: POSTS_PER_PAGE,
  })

  const categories = getCategories(posts)
  const allTags = getAllTags(posts)

  const listShape = (p: BlogPostItem) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    coverImage: p.coverImage,
    category: p.category,
    tags: p.tags,
    publishedDate: p.publishedDate,
    readingTime: p.readingTime,
  })

  const initialPosts = filteredPosts.map(listShape)
  const featured = featuredPost ? listShape(featuredPost) : undefined

  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main id="main-content" role="main" className="pt-0">
        {/* Page header */}
        <section
          aria-labelledby="blog-heading"
          className="section-glow relative pt-16 pb-12 md:pt-20 md:pb-16 text-center"
        >
          <div className="max-w-container mx-auto container-px">
            <span className="overline">The Design Brief</span>
            <h1
              id="blog-heading"
              className="mt-5 mx-auto max-w-2xl font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.025em] text-ivory text-balance"
            >
              Thoughts on design, AI, and craft.
            </h1>
            <p className="mt-5 text-body-lg text-silver mx-auto max-w-xl">
              Insights from Designient mentors and alumni on careers, tools, and the art of design.
            </p>
          </div>
        </section>
        <BlogsPageClient
          featuredPost={featured}
          initialPosts={initialPosts}
          totalPosts={totalPosts}
          postsPerPage={POSTS_PER_PAGE}
          currentPage={page}
          totalPages={totalPages}
          categories={categories}
          allTags={allTags}
          selectedCategory={category}
          selectedTags={tags}
          sortBy={sort}
          searchQuery={search}
        />
      </main>
      <Footer />
    </div>
  )
}
