import { Metadata } from "next";
import { homepageData } from "../../(client)/homepageData";
import { getProjectsByCategory, getServices } from "../../../lib/cms";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import FilterBar, { FilterItem } from "../../../components/FilterBar/FilterBar";
import ProjectsHero from "../../../components/ProjectsHero/ProjectsHero";
import ProjectsGrid from "./(client)/ProjectsGrid";
import { StyledProjects } from "./(client)/StyledProjects";
import { projectsData } from "./(client)/projectsData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { items } = await getServices();
  return [
    { category: [] },
    ...items.map((service) => ({ category: [service._slug] })),
  ];
}

export async function generateMetadata() {
  return {
    title: projectsData.name,
    description: projectsData.heroHeader,
    openGraph: {
      images: homepageData.about.figureBanner.image.src,
      title: projectsData.name,
      description: projectsData.heroPerex,
    },
  };
}

interface PageProps {
  params: Promise<{ category: string }>;
}

const page = async ({ params }: PageProps) => {
  const { category } = await params;
  const [projects, services] = await Promise.all([
    getProjectsByCategory({
      categorySlug: category,
      limit: 6,
    }),
    getServices(),
  ]);

  if (projects.total === 0) {
    notFound();
  }

  const filters: FilterItem[] = [
    { label: "Vše", href: "/projekty", isActive: !category },
    ...services.items.map(({ service_name, _slug }) => ({
      label: service_name,
      href: `/projekty/${_slug}`,
      isActive: category?.includes(_slug) ?? false,
    })),
  ];

  return (
    <StyledProjects>
      <ProjectsHero
        header={projectsData.heroHeader}
        perex={projectsData.heroPerex}
      />
      <FilterBar label="Filtry" filters={filters} className="no-padding" />
      <ProjectsGrid projects={projects} totalCount={projects.total} />
      <ClientQuote
        quote={projectsData.quote.quote}
        client={projectsData.quote.client}
      />
    </StyledProjects>
  );
};

export default page;
