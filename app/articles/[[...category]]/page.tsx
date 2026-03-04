import { getArticlesByCategory, getArticleCategories } from "../../../lib/cms";
import FilterBar, { FilterItem } from "../../../components/FilterBar/FilterBar";
import ProjectsHero from "../../../components/ProjectsHero/ProjectsHero";
import ArticlesGrid, {
  articlesPerPage,
} from "../../../components/ArticlesGrid/ArticlesGrid";
import { StyledArticles } from "./(client)/StyledArticles";
import { articlesData } from "./(client)/articlesData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { items } = await getArticleCategories();
  return [{ category: [] }, ...items.map((cat) => ({ category: [cat._slug] }))];
}

export async function generateMetadata() {
  return {
    title: articlesData.name,
    description: articlesData.heroPerex,
    openGraph: {
      title: articlesData.name,
      description: articlesData.heroPerex,
    },
  };
}

interface PageProps {
  params: Promise<{ category: string }>;
}

const page = async ({ params }: PageProps) => {
  const { category } = await params;
  const [articles, categories] = await Promise.all([
    getArticlesByCategory({
      categorySlug: category,
      limit: articlesPerPage,
    }),
    getArticleCategories(),
  ]);

  if (articles.total === 0) {
    notFound();
  }

  const filters: FilterItem[] = [
    { label: "Vše", href: "/clanky", isActive: !category },
    ...categories.items.map(({ article_category_name, _slug }) => ({
      label: article_category_name ?? "",
      href: `/clanky/${_slug}`,
      isActive: category?.includes(_slug) ?? false,
    })),
  ];

  return (
    <StyledArticles>
      <ProjectsHero
        header={articlesData.heroHeader}
        perex={articlesData.heroPerex}
      />
      <FilterBar label="Filtry" filters={filters} className="no-padding" />
      <ArticlesGrid articles={articles} totalCount={articles.total} />
    </StyledArticles>
  );
};

export default page;
