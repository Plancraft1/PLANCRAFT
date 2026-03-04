import { Metadata } from "next";
import { homepageData } from "../../(client)/homepageData";
import getClient from "../../../apollo/client";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import RevealAnimation from "../../../components/TextAnimation/RevealAnimation";
import { Large } from "../../../components/Typography/Large";
import { Mini } from "../../../components/Typography/Mini";
import { GetProjects } from "../../../gql/GetProjects";
import { GetServices } from "../../../gql/GetServices";
import {
  Query,
  QueryProjectsArgs,
  QueryServicesArgs,
} from "../../../gql/types";
import ProjectsGrid, { projectsPerPage } from "./(client)/ProjectsGrid";
import {
  ProjectDividerHeaderInner,
  ProjectFilter,
  ProjectFilters,
  ProjectsHero,
  StyledProjects,
} from "./(client)/StyledProjects";
import { projectsData } from "./(client)/projectsData";

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

export const revalidate = 10;

interface PageProps {
  params: Promise<{ category: string }>;
}

const page = async ({ params }: PageProps) => {
  const { category } = await params;
  const client = getClient();

  const {
    data: { Projects },
  } = await client.query<Query>({
    query: GetProjects,
    variables: {
      limit: 6,
      where: {
        project_category: { _slug_any: category || [] },
      },
      coverImageFormat: "webp",
      coverImageCropPreset: "gridcover",
    } as QueryProjectsArgs,
  });

  const {
    data: { Services },
  } = await client.query<Query>({
    query: GetServices,
    variables: { limit: null, locale: "cs-CZ" } as QueryServicesArgs,
  });

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
            {Services.items.map(({ service_name, _slug }, i) => (
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
      <ProjectsGrid projects={Projects} totalCount={Projects.total} />
      <ClientQuote
        quote={projectsData.quote.quote}
        client={projectsData.quote.client}
      />
    </StyledProjects>
  );
};

export default page;
