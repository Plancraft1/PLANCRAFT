import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "../../../lib/cms";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import Link from "../../../components/Link/Link";
import { Mini } from "../../../components/Typography/Mini";
import ProjectContent from "./(client)/ProjectContent";
import ProjectElevator from "./(client)/ProjectElevator";
import {
  ProjectDetail,
  ProjectNavigation,
  ProjectNavigationInner,
  StyledProject,
} from "./(client)/StyledProject";

export async function generateStaticParams() {
  const { items } = await getProjects();
  return items.map((project) => ({ slug: project._slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Projekt nenalezen" };
  }

  const { project_name, project_description, project_cover } = project;

  return {
    title: `Projekt\u2002|\u2002${project_name}`,
    description: project_description,
    openGraph: {
      images: project_cover?.url,
      title: project_name,
      description: project_description,
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <StyledProject>
      <ProjectDetail>
        <ProjectContent project={project} />
        <ProjectElevator project={project} />
      </ProjectDetail>
      <ProjectNavigation>
        <DividerHeader className="flip">
          <ProjectNavigationInner>
            <Mini>
              <Link className="flip" href={"/projects"}>
                {"Zpět na projekty"}
              </Link>
            </Mini>
            <Mini>
              <Link href={`/project/${project.next_project[0]._slug}`}>
                {`Další projekt: ${project.next_project[0].project_name}`}
              </Link>
            </Mini>
          </ProjectNavigationInner>
        </DividerHeader>
      </ProjectNavigation>
      {project.project_client_quote_name && project.project_client_quote && (
        <ClientQuote
          client={project.project_client_quote_name}
          quote={project.project_client_quote}
        />
      )}
    </StyledProject>
  );
};

export default page;
