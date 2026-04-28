import { MetadataRoute } from "next";
import { navConfig } from "../components/Navbar/navConfig";
import {
  getArticleCategories,
  getArticles,
  getProjects,
  getServices,
} from "../lib/cms";

const domain = "https://plancraft.eu";

type SitemapEntry = MetadataRoute.Sitemap[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [
    projectsResult,
    servicesResult,
    articlesResult,
    articleCategoriesResult,
  ] = await Promise.all([
    getProjects(),
    getServices(),
    getArticles(),
    getArticleCategories(),
  ]);

  // Homepage - highest priority
  const homepage: SitemapEntry = {
    url: domain,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  };

  // Static pages (about, contact, etc.)
  const staticPages: SitemapEntry[] = navConfig.map((page) => ({
    url: `${domain}${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Root listing pages
  const listingPages: SitemapEntry[] = [
    {
      url: `${domain}/projekty`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${domain}/clanky`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Individual project pages
  const projectPages: SitemapEntry[] = projectsResult.items.map((p) => ({
    url: `${domain}/projekt/${p._slug}`,
    lastModified: p._changed_on ? new Date(p._changed_on) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Project category filter pages (based on services)
  const projectCategoryPages: SitemapEntry[] = servicesResult.items.map(
    (s) => ({
      url: `${domain}/projekty/${s._slug}`,
      lastModified: s._changed_on ? new Date(s._changed_on) : new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    })
  );

  // Individual article pages
  const articlePages: SitemapEntry[] = articlesResult.items.map((a) => ({
    url: `${domain}/clanek/${a._slug}`,
    lastModified: a._publish_on ? new Date(a._publish_on) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Article category filter pages
  const articleCategoryPages: SitemapEntry[] =
    articleCategoriesResult.items.map((c) => ({
      url: `${domain}/clanky/${c._slug}`,
      lastModified: c._changed_on ? new Date(c._changed_on) : new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    }));

  return [
    homepage,
    ...staticPages,
    ...listingPages,
    ...projectPages,
    ...projectCategoryPages,
    ...articlePages,
    ...articleCategoryPages,
  ];
}
