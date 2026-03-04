import { Metadata } from "next";
import getClient from "../../../apollo/client";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import NumberedList from "../../../components/NumberedList/NumberedList";
import PageIntro from "../../../components/PageIntro/PageIntro";
import ProjectCardSmall from "../../../components/ProjectCardSmall/ProjectCardSmall";
import { ProjectsCardsSmallWrapper } from "../../../components/ProjectCardSmall/StyledProjectCardSmall";
import Services from "../../../components/Services/Services";
import RevealAnimation from "../../../components/TextAnimation/RevealAnimation";
import { Mini } from "../../../components/Typography/Mini";
import { Small } from "../../../components/Typography/Small";
import { GetProjects } from "../../../gql/GetProjects";
import { Query, QueryProjectsArgs } from "../../../gql/types";
import {
  ServiceAdvantages,
  ServiceNumberedList,
  ServicePerex,
  SimilarProjects,
  StyledService,
} from "./(client)/StyledService";
import { servicesData } from "./servicesData";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Služba\u2002|\u2002${servicesData[slug].name}`,
    description: servicesData[slug].introPerex,
    openGraph: {
      images: servicesData[slug].figureBanner.image.src,
      title: servicesData[slug].heroHeader,
      description: servicesData[slug].introPerex,
    },
  };
}
export const revalidate = 10;

interface PageProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const data = servicesData[slug];

  const client = getClient();
  const {
    data: { Projects },
  } = await client.query<Query>({
    query: GetProjects,
    variables: {
      limit: 4,
      where: {
        project_category: { _slug_any: [slug] },
      },
    } as QueryProjectsArgs,
  });

  return (
    <StyledService>
      <PageIntro
        withCta
        heroHeader={data.heroHeader}
        figureBanner={{
          perex: data.figureBanner.perex,
          image: {
            src: data.figureBanner.image.src,
            width: data.figureBanner.image.width,
            height: data.figureBanner.image.height,
            alt: data.figureBanner.image.alt,
          },
        }}
        introPerex={data.introPerex}
        scrollFigureBanner={{
          items: data.scrollFigureBanner.items,
        }}
      />
      {data.serviceContent.type === "cabinet" && (
        <Services
          mainHeader={data.serviceContent.mainHeader}
          list={data.serviceContent.list}
        />
      )}
      {data.serviceContent.type === "list" && (
        <ServiceNumberedList>
          <DividerHeader className="no-padding">
            <Mini className="uppercase">{"Obsah služby"}</Mini>
          </DividerHeader>
          <NumberedList items={data.serviceContent.list} />
        </ServiceNumberedList>
      )}
      <RevealAnimation>
        <ServicePerex>
          <Small className="break-lines wide">{data.servicePerex}</Small>
        </ServicePerex>
      </RevealAnimation>
      {data.advantages && (
        <ServiceAdvantages>
          <DividerHeader>
            <Mini className="uppercase">Výhody</Mini>
          </DividerHeader>
          <NumberedList items={data.advantages} />
        </ServiceAdvantages>
      )}
      {Projects.items.length !== 0 && (
        <SimilarProjects>
          <DividerHeader>
            <Mini className="uppercase">Související projekty</Mini>
          </DividerHeader>
          <ProjectsCardsSmallWrapper>
            {Projects.items.map(({ project_name, _slug, project_cover }, i) => (
              <ProjectCardSmall
                key={i}
                delay={i * 0.5}
                projectName={project_name}
                slug={_slug}
                image={{
                  src: project_cover.url,
                  width: project_cover.width,
                  height: project_cover.width,
                  alt: project_cover.description || project_name,
                }}
              />
            ))}
          </ProjectsCardsSmallWrapper>
        </SimilarProjects>
      )}
      <ClientQuote client={data.quote.client} quote={data.quote.quote} />
    </StyledService>
  );
};

export default page;
