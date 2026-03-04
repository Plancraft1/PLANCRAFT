"use client";

import { useAction } from "next-safe-action/hooks";
import { useParams } from "next/navigation";
import { Fragment, useState } from "react";
import type { Project, Projects } from "../../../../gql/types";
import Button from "../../../../components/Button/Button";
import Divider from "../../../../components/Divider/Divider";
import GridCard from "../../../../components/GridCard/GridCard";
import RevealAnimation from "../../../../components/TextAnimation/RevealAnimation";
import { loadMoreProjectsAction } from "./actions";
import { LoadMoreW, GridCardW, StyledProjectsGrid } from "./StyledProjectsGrid";

interface ProjectsGridProps {
  projects: Projects;
  totalCount: number;
}

export const projectsPerPage = 6;

const ProjectsGrid = ({
  projects: initialProjects,
  totalCount,
}: ProjectsGridProps) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects.items);
  const [skip, setSkip] = useState<number>(projectsPerPage);
  const query = useParams<{ category: string[] }>();

  const { execute, isPending } = useAction(loadMoreProjectsAction, {
    onSuccess: ({ data }) => {
      if (data) {
        setSkip((p) => p + projectsPerPage);
        setProjects((p) => [...p, ...data.items]);
      }
    },
  });

  const handleLoadMore = () => {
    execute({
      skip,
      limit: projectsPerPage,
      category: query.category,
    });
  };

  return (
    <StyledProjectsGrid>
      {projects.map(
        (
          {
            project_name,
            _slug,
            project_realization,
            project_category,
            project_cover,
          },
          i
        ) => (
          <Fragment key={_slug}>
            <RevealAnimation>
              <GridCardW>
                <GridCard
                  title={project_name}
                  href={`/projekt/${_slug}`}
                  tags={project_category.map((c) => c.service_name)}
                  detail={`Realizace ${project_realization}`}
                  ctaLabel="Zobrazit projekt"
                  image={{
                    src: project_cover?.url,
                    width: project_cover?.width,
                    height: project_cover?.height,
                    alt: project_cover?.description || project_name,
                  }}
                />
              </GridCardW>
            </RevealAnimation>
            {!(i === projects.length) && <Divider hidePlus />}
          </Fragment>
        )
      )}
      {totalCount > projects.length && (
        <LoadMoreW>
          <RevealAnimation noCrop>
            <Button onClick={handleLoadMore}>
              {isPending ? "Načítám" : "Další projekty"}
            </Button>
          </RevealAnimation>
        </LoadMoreW>
      )}
    </StyledProjectsGrid>
  );
};

export default ProjectsGrid;
