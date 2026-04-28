import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Large } from "../Typography/Large";
import { Mini } from "../Typography/Mini";
import { ProjectsHeroHeader, StyledProjectsHero } from "./StyledProjectsHero";

interface ProjectsHeroProps {
  header: string;
  perex: string;
}

const ProjectsHero = ({ header, perex }: ProjectsHeroProps) => {
  return (
    <StyledProjectsHero>
      <RevealAnimation>
        <ProjectsHeroHeader>{header}</ProjectsHeroHeader>
      </RevealAnimation>
      <RevealAnimation delay={1}>
        <Mini>{perex}</Mini>
      </RevealAnimation>
    </StyledProjectsHero>
  );
};

export default ProjectsHero;
