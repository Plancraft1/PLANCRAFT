import { unstable_cache } from "next/cache";
import { getClient } from "./client";
import { ARTICLES_QUERY } from "./queries/articles";
import { ARTICLE_CATEGORIES_QUERY } from "./queries/articleCategories";
import { HOMEPAGE_PROJECTS_QUERY } from "./queries/homepageProjects";
import { PROJECTS_QUERY } from "./queries/projects";
import { SERVICES_QUERY } from "./queries/services";
import type {
  Article,
  ArticleCategory,
  ArticleSortInput,
  ArticleWhereInput,
  Project,
  Query,
  QueryArticleCategoriesArgs,
  QueryArticlesArgs,
  QueryProjectsArgs,
  QueryServicesArgs,
  ProjectWhereInput,
  Service,
} from "../../gql/types";

// Cache tags
export const CACHE_TAGS = {
  projects: "projects",
  services: "services",
  homepage: "homepage",
  articles: "articles",
  articleCategories: "articleCategories",
} as const;

// =====================
// Homepage Projects API
// =====================

export interface HomepageProjectsOptions {
  coverImageFormat?: string;
  coverImageCropPreset?: string;
  coverImageWidth?: number;
  coverImageHeight?: number;
}

async function fetchHomepageProjects(
  options: HomepageProjectsOptions = {}
): Promise<Project[]> {
  const client = getClient();

  const { data } = await client.query<Query>({
    query: HOMEPAGE_PROJECTS_QUERY,
    variables: {
      coverImageFormat: options.coverImageFormat ?? "webp",
      coverImageCropPreset: options.coverImageCropPreset ?? "gridcover",
      coverImageWidth: options.coverImageWidth,
      coverImageHeight: options.coverImageHeight,
    },
  });

  return data.HomepageProjects?.homepageprojects ?? [];
}

export const getHomepageProjects = unstable_cache(fetchHomepageProjects, [], {
  tags: [CACHE_TAGS.homepage, CACHE_TAGS.projects],
});

// =====================
// Projects API
// =====================

export interface GetProjectsOptions {
  limit?: number;
  skip?: number;
  where?: ProjectWhereInput;
  coverImageFormat?: string;
  coverImageCropPreset?: string;
  coverImageWidth?: number;
  coverImageHeight?: number;
  detailImageWidth?: number;
  detailImageHeight?: number;
  detailImageFormat?: string;
}

export interface GetProjectsResult {
  items: Project[];
  total: number;
}

async function fetchProjects(
  options: GetProjectsOptions = {}
): Promise<GetProjectsResult> {
  const client = getClient();

  const { data } = await client.query<Query>({
    query: PROJECTS_QUERY,
    variables: {
      limit: options.limit,
      skip: options.skip,
      where: options.where,
      coverImageFormat: options.coverImageFormat ?? "webp",
      coverImageCropPreset: options.coverImageCropPreset ?? "gridcover",
      coverImageWidth: options.coverImageWidth,
      coverImageHeight: options.coverImageHeight,
      detailImageWidth: options.detailImageWidth,
      detailImageHeight: options.detailImageHeight,
      detailImageFormat: options.detailImageFormat,
    } as QueryProjectsArgs,
  });

  return {
    items: data.Projects?.items ?? [],
    total: data.Projects?.total ?? 0,
  };
}

export const getProjects = unstable_cache(fetchProjects, [], {
  tags: [CACHE_TAGS.projects],
});

// =====================
// Project by Slug API
// =====================

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { items } = await getProjects({
    where: { _slug_any: [slug] },
  });

  return items[0] ?? null;
}

// =====================
// Projects by Category API
// =====================

export interface GetProjectsByCategoryOptions {
  categorySlug?: string | string[];
  limit?: number;
  skip?: number;
  coverImageFormat?: string;
  coverImageCropPreset?: string;
}

export async function getProjectsByCategory(
  options: GetProjectsByCategoryOptions = {}
): Promise<GetProjectsResult> {
  const categoryFilter = options.categorySlug
    ? Array.isArray(options.categorySlug)
      ? options.categorySlug
      : [options.categorySlug]
    : [];

  return getProjects({
    limit: options.limit,
    skip: options.skip,
    where:
      categoryFilter.length > 0
        ? { project_category: { _slug_any: categoryFilter } }
        : undefined,
    coverImageFormat: options.coverImageFormat ?? "webp",
    coverImageCropPreset: options.coverImageCropPreset ?? "gridcover",
  });
}

// =====================
// Services API
// =====================

export interface GetServicesOptions {
  limit?: number | null;
  locale?: string;
}

export interface GetServicesResult {
  items: Service[];
  total: number;
}

async function fetchServices(
  options: GetServicesOptions = {}
): Promise<GetServicesResult> {
  const client = getClient();

  const { data } = await client.query<Query>({
    query: SERVICES_QUERY,
    variables: {
      locale: options.locale ?? "cs-CZ",
      limit: options.limit ?? null,
    } as QueryServicesArgs,
  });

  return {
    items: data.Services?.items ?? [],
    total: data.Services?.total ?? 0,
  };
}

export const getServices = unstable_cache(fetchServices, [], {
  tags: [CACHE_TAGS.services],
});

// =====================
// Articles API
// =====================

export interface GetArticlesOptions {
  limit?: number;
  skip?: number;
  where?: ArticleWhereInput;
  sort?: ArticleSortInput;
  coverImageFormat?: string;
  coverImageCropPreset?: string;
  coverImageWidth?: number;
  coverImageHeight?: number;
}

export interface GetArticlesResult {
  items: Article[];
  total: number;
}

async function fetchArticles(
  options: GetArticlesOptions = {}
): Promise<GetArticlesResult> {
  const client = getClient();

  const { data } = await client.query<Query>({
    query: ARTICLES_QUERY,
    variables: {
      limit: options.limit,
      skip: options.skip,
      where: options.where,
      sort: options.sort,
      coverImageFormat: options.coverImageFormat ?? "webp",
      coverImageCropPreset: options.coverImageCropPreset ?? "gridcover",
      coverImageWidth: options.coverImageWidth,
      coverImageHeight: options.coverImageHeight,
    } as QueryArticlesArgs,
  });

  return {
    items: data.Articles?.items ?? [],
    total: data.Articles?.total ?? 0,
  };
}

export const getArticles = unstable_cache(fetchArticles, [], {
  tags: [CACHE_TAGS.articles],
});

// =====================
// Article by Slug API
// =====================

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { items } = await getArticles({
    where: { _slug_any: [slug] },
  });

  return items[0] ?? null;
}

// =====================
// Articles by Category API
// =====================

export interface GetArticlesByCategoryOptions {
  categorySlug?: string | string[];
  limit?: number;
  skip?: number;
  coverImageFormat?: string;
  coverImageCropPreset?: string;
}

export async function getArticlesByCategory(
  options: GetArticlesByCategoryOptions = {}
): Promise<GetArticlesResult> {
  const categoryFilter = options.categorySlug
    ? Array.isArray(options.categorySlug)
      ? options.categorySlug
      : [options.categorySlug]
    : [];

  return getArticles({
    limit: options.limit,
    skip: options.skip,
    where:
      categoryFilter.length > 0
        ? { article_category: { _slug_any: categoryFilter } }
        : undefined,
    coverImageFormat: options.coverImageFormat ?? "webp",
    coverImageCropPreset: options.coverImageCropPreset ?? "gridcover",
  });
}

// =====================
// Article Categories API
// =====================

export interface GetArticleCategoriesOptions {
  limit?: number | null;
  locale?: string;
}

export interface GetArticleCategoriesResult {
  items: ArticleCategory[];
  total: number;
}

async function fetchArticleCategories(
  options: GetArticleCategoriesOptions = {}
): Promise<GetArticleCategoriesResult> {
  const client = getClient();

  const { data } = await client.query<Query>({
    query: ARTICLE_CATEGORIES_QUERY,
    variables: {
      locale: options.locale ?? "cs-CZ",
      limit: options.limit ?? null,
    } as QueryArticleCategoriesArgs,
  });

  return {
    items: data.ArticleCategories?.items ?? [],
    total: data.ArticleCategories?.total ?? 0,
  };
}

export const getArticleCategories = unstable_cache(fetchArticleCategories, [], {
  tags: [CACHE_TAGS.articleCategories],
});
