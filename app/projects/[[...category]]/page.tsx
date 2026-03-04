import { Metadata } from "next";
import { homepageData } from "../../(client)/homepageData";
import { getProjectsByCategory, getServices } from "../../../lib/cms";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import RevealAnimation from "../../../components/TextAnimation/RevealAnimation";
import { Large } from "../../../components/Typography/Large";
import { Mini } from "../../../components/Typography/Mini";
import ProjectsGrid from "./(client)/ProjectsGrid";
import {
  ProjectDividerHeaderInner,
  ProjectFilter,
  ProjectFilters,
  ProjectsHero,
  StyledProjects,
} from "./(client)/StyledProjects";
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

  return (
    <StyledProjects>
      <ProjectsHero>
        <RevealAnimation>
          <Large>{projectsData.heroHeader}</Large>
        </RevealAnimation>
        <RevealAnimation delay={1}>
          <Mini>{projectsData.heroPerex}</Mini>
        </RevealAnimation>
      </ProjectsHero>
      <DividerHeader className="no-padding">
        <ProjectDividerHeaderInner>
          <RevealAnimation delay={0.5}>
            <Mini className="uppercase">Filtry</Mini>
          </RevealAnimation>
          <ProjectFilters>
            <RevealAnimation delay={1} style={{ width: "auto" }}>
              <ProjectFilter
                href={"/projekty"}
                className={category ? "inactive" : ""}
              >
                <Mini>Vše</Mini>
              </ProjectFilter>
            </RevealAnimation>
            {services.items.map(({ service_name, _slug }, i) => (
              <RevealAnimation
                delay={i * 0.5 + 1}
                style={{ width: "auto" }}
                key={_slug}
              >
                <ProjectFilter
                  href={`/projekty/${_slug}`}
                  className={category?.includes(_slug) ? "" : "inactive"}
                >
                  <Mini>{service_name}</Mini>
                </ProjectFilter>
              </RevealAnimation>
            ))}
          </ProjectFilters>
        </ProjectDividerHeaderInner>
      </DividerHeader>
      <ProjectsGrid projects={projects} totalCount={projects.total} />
      <ClientQuote
        quote={projectsData.quote.quote}
        client={projectsData.quote.client}
      />
    </StyledProjects>
  );
};

export default page;
