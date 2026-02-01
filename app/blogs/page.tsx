import type { Metadata } from 'next'
export const runtime = 'edge'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
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
  title: 'Blogs & Insights on UI/UX Design, Careers, and Learning | Designient',
  description:
    'Expert insights, career guides, design tips, and industry trends to help you grow as a UI/UX designer. Read the Designient blog.',
  keywords: ['UI/UX blog', 'design blog', 'UX design articles', 'design career', 'Designient blog'],
  openGraph: {
    title: 'Blogs & Insights | Designient',
    description: 'Expert insights, career guides, and design tips for UI/UX designers.',
    url: 'https://designient.com/blogs',
    type: 'website',
  },
  alternates: {
    canonical: 'https://designient.com/blogs',
  },
  robots: {
    index: true,
    follow: true,
  },
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
    category,
    tags,
    sort,
    search,
    page,
    perPage: POSTS_PER_PAGE,
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
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main id="main-content" role="main" className="pt-24 md:pt-32">
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
