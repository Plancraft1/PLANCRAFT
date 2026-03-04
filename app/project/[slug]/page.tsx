import { Metadata } from "next";
import getClient from "../../../apollo/client";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import Link from "../../../components/Link/Link";
import { Mini } from "../../../components/Typography/Mini";
import { GetProjects } from "../../../gql/GetProjects";
import { Query, QueryProjectsArgs } from "../../../gql/types";
import ProjectContent from "./(client)/ProjectContent";
import ProjectElevator from "./(client)/ProjectElevator";
import {
  ProjectDetail,
  ProjectNavigation,
  ProjectNavigationInner,
  StyledProject,
} from "./(client)/StyledProject";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const {
    data: { Projects },
  } = await getProjectData(slug);
  const { project_name, project_description, project_cover } =
    Projects.items[0];

  return {
    title: `Projekt\u2002|\u2002${project_name}`,
    description: project_description,
    openGraph: {
      images: project_cover.url,
      title: project_name,
      description: project_description,
    },
  };
}

export const revalidate = 10;

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getProjectData(slug: string) {
  const client = getClient();

  return await client.query<Query>({
    query: GetProjects,
    variables: {
      locale: "cs-CZ",
      where: { _slug_any: [slug] },
    } as QueryProjectsArgs,
  });
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const {
    data: {
      Projects: { items: projects },
    },
  } = await getProjectData(slug);
  const project = projects[0];

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
