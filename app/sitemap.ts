// app/sitemap.ts
import { MetadataRoute } from 'next';
import { CONSTANTS } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import { channelsData } from '@/lib/channels-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${CONSTANTS.DOMAIN}`;
  const now = new Date();

  // -------------------------------------------------------------------------
  // 1. CORE STATIC PAGES
  // -------------------------------------------------------------------------
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/preise`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/einrichtung`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reseller-werden`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/bewertungen`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // -------------------------------------------------------------------------
  // 2. BRAND LANDING PAGES (kaufrelevante Keywords)
  // -------------------------------------------------------------------------
  const brandPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/kostenlos-testen`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // -------------------------------------------------------------------------
  // 3. CHANNELS INDEX (listing of all categories)
  // -------------------------------------------------------------------------
  const channelsIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/sender`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // -------------------------------------------------------------------------
  // 4. LEGAL & POLICY PAGES
  // -------------------------------------------------------------------------
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/agb`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/rueckgabe`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dmca`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // -------------------------------------------------------------------------
  // 5. DYNAMIC CHANNEL CATEGORIES
  // -------------------------------------------------------------------------
  const channelPages: MetadataRoute.Sitemap = channelsData.map((category) => ({
    url: `${baseUrl}/sender/${category.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // -------------------------------------------------------------------------
  // 6. DYNAMIC BLOG POSTS
  // -------------------------------------------------------------------------
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // -------------------------------------------------------------------------
  // COMBINE & RETURN
  // -------------------------------------------------------------------------
  return [
    ...corePages,
    ...brandPages,
    ...channelsIndex,
    ...channelPages,
    ...blogPostPages,
    ...legalPages,
  ];
}