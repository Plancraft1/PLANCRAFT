import { Metadata } from "next";
import { getProjectsByCategory } from "../../../lib/cms";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import NumberedList from "../../../components/NumberedList/NumberedList";
import PageIntro from "../../../components/PageIntro/PageIntro";
import CardSmall from "../../../components/CardSmall/CardSmall";
import { CardsSmallWrapper } from "../../../components/CardSmall/StyledCardSmall";
import Services from "../../../components/Services/Services";
import RevealAnimation from "../../../components/TextAnimation/RevealAnimation";
import { Mini } from "../../../components/Typography/Mini";
import { Small } from "../../../components/Typography/Small";
import RelatedArticles from "../../../components/RelatedArticles/RelatedArticles";
import {
  ServiceAdvantages,
  ServiceNumberedList,
  ServicePerex,
  SimilarProjects,
  StyledService,
} from "./(client)/StyledService";
import { servicesData } from "./servicesData";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

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

interface PageProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const data = servicesData[slug];

  const { items: projectItems } = await getProjectsByCategory({
    categorySlug: slug,
    limit: 4,
  });

  const Projects = { items: projectItems };

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
          <CardsSmallWrapper>
            {Projects.items.map(({ project_name, _slug, project_cover }, i) => (
              <CardSmall
                key={i}
                delay={i * 0.5}
                title={project_name}
                href={`/projekt/${_slug}`}
                image={{
                  src: project_cover.url,
                  width: project_cover.width,
                  height: project_cover.width,
                  alt: project_cover.description || project_name,
                }}
              />
            ))}
          </CardsSmallWrapper>
        </SimilarProjects>
      )}
      <RelatedArticles category={slug} />
      <ClientQuote client={data.quote.client} quote={data.quote.quote} />
    </StyledService>
  );
};

export default page;
