import { NextRequest, NextResponse } from 'next/server'
import blogsData from '../../../data/blogs.json'
import { getFilteredBlogs, type BlogPostItem } from '../../../utils/blogHelpers'

const POSTS_PER_PAGE = 9

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10) || 1)
    const category = searchParams.get('category') ?? null
    const tagsParam = searchParams.get('tags')
    const tags = tagsParam ? tagsParam.split(',').filter(Boolean) : []
    const sort = searchParams.get('sort') ?? 'latest'
    const search = searchParams.get('search') ?? ''

    const posts = blogsData as BlogPostItem[]
    const { posts: paginated, totalPages } = getFilteredBlogs(posts, {
      category,
      tags,
      sort,
      search,
      page,
      perPage: POSTS_PER_PAGE,
    })

    const payload = paginated.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      coverImage: p.coverImage,
      category: p.category,
      tags: p.tags,
      publishedDate: p.publishedDate,
      readingTime: p.readingTime,
    }))

    return NextResponse.json({ posts: payload, totalPages })
  } catch (error) {
    console.error('Blogs API error:', error)
    return NextResponse.json({ posts: [], totalPages: 1 }, { status: 500 })
  }
}
