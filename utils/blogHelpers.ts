export interface BlogPostItem {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  publishedDate: string
  updatedDate?: string
  readingTime: string
  featured?: boolean
  content?: string
  author?: { name: string; bio: string; image: string }
}

export interface BlogFilterParams {
  category?: string | null
  tags?: string[]
  sort?: string
  search?: string
  page?: number
  perPage?: number
}

export function getFilteredBlogs(
  posts: BlogPostItem[],
  params: BlogFilterParams
): { posts: BlogPostItem[]; totalPosts: number; totalPages: number } {
  const {
    category = null,
    tags = [],
    sort = 'latest',
    search = '',
    page = 1,
    perPage = 9,
  } = params

  let filtered = [...posts]

  if (category) {
    filtered = filtered.filter((p) => p.category === category)
  }
  if (tags.length > 0) {
    filtered = filtered.filter((p) => tags.some((t) => p.tags.includes(t)))
  }
  if (search.trim()) {
    const q = search.toLowerCase().trim()
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  if (sort === 'popular') {
    filtered.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1))
  } else {
    filtered.sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    )
  }

  const totalPosts = filtered.length
  const totalPages = Math.max(1, Math.ceil(totalPosts / perPage))
  const pageIndex = Math.max(0, Math.min(page - 1, totalPages - 1))
  const start = pageIndex * perPage
  const paginated = filtered.slice(start, start + perPage)

  return { posts: paginated, totalPosts, totalPages }
}

export function getFeaturedPost(posts: BlogPostItem[]): BlogPostItem | undefined {
  return posts.find((p) => p.featured) ?? posts[0]
}

export function getCategories(posts: BlogPostItem[]): string[] {
  const set = new Set(posts.map((p) => p.category))
  return Array.from(set).sort()
}

export function getAllTags(posts: BlogPostItem[]): string[] {
  const set = new Set(posts.flatMap((p) => p.tags))
  return Array.from(set).sort()
}

export function getPostBySlug(posts: BlogPostItem[], slug: string): BlogPostItem | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getRelatedPosts(
  posts: BlogPostItem[],
  currentSlug: string,
  limit = 3
): BlogPostItem[] {
  return posts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit)
    .map(({ slug, title, excerpt, coverImage, category, publishedDate, readingTime }) => ({
      slug,
      title,
      excerpt,
      coverImage,
      category,
      publishedDate,
      readingTime,
    })) as BlogPostItem[]
}
