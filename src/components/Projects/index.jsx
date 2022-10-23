import { Container, ProjectsContainer, Section, SectionTitle, TitleSpan } from "./style";
import projects from '../../assets/data/projects'
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <Section>
      <Container>
        <SectionTitle>
          My <TitleSpan>Projects</TitleSpan>
        </SectionTitle>

        <ProjectsContainer>
          {projects.map((data) => (
            <ProjectCard key={data.name} {...data} />
          ))}
        </ProjectsContainer>
      </Container>
    </Section>
  )
}