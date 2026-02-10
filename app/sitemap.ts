import { MetadataRoute } from 'next'
import blogsData from '../data/blogs.json'

export type SitemapEntry = MetadataRoute.Sitemap[number]

export function getSitemapEntries(): SitemapEntry[] {
  const baseUrl = 'https://designient.com'
  const now = new Date()
  const lastmod = now.toISOString().split('T')[0] // YYYY-MM-DD for sitemap best practice

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ui-ux-design-pro`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ui-ux-design-bootcamp`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ui-ux-design-master`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prompt-engineering-mastery`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ui-ux-design-course-in-bangalore`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ui-ux-design-course-in-hyderabad`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ui-ux-design-course-in-pune`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/placements`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cancellation-refund-policy`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/code-of-conduct`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/corporates`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/corporates/training-programs`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/corporates/ai-enablement-workshops`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/corporates/hiring-consulting`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/corporates/case-studies`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/apply-now`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/verify`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Note: /thank-you and /verify/uxp/[hash] are intentionally excluded
    // as they have robots: noindex and should not appear in sitemap
  ]

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogsData.map((post: { slug: string; updatedDate?: string; publishedDate: string }) => {
    const d = post.updatedDate ? new Date(post.updatedDate) : new Date(post.publishedDate)
    return {
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: d.toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  })

  // Career pages
  const careerPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/careers/ui-ux-mentor`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers/community-manager`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers/curriculum-designer`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers/student-success-coordinator`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  return [...staticPages, ...blogPages, ...careerPages]
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries()
}
