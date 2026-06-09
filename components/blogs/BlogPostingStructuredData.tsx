import type { BlogPostItem } from '../../utils/blogHelpers'

type BlogPostingStructuredDataProps = {
  post: BlogPostItem
}

export function BlogPostingStructuredData({ post }: BlogPostingStructuredDataProps) {
  const url = `https://designient.com/blogs/${post.slug}`
  const image = post.coverImage.startsWith('http')
    ? post.coverImage
    : `https://designient.com${post.coverImage}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate ?? post.publishedDate,
    author: post.author
      ? {
          '@type': 'Person',
          name: post.author.name,
          description: post.author.bio,
        }
      : {
          '@type': 'Organization',
          name: 'Designient School of Masterminds',
        },
    publisher: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      logo: {
        '@type': 'ImageObject',
        url: 'https://designient.com/designient-logo.svg',
      },
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
