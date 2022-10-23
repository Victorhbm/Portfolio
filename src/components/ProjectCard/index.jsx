import { FiGithub } from "react-icons/fi";
import { HiLink } from "react-icons/hi";
import {
  Button,
  ButtonBGBlue,
  ButtonBGPurple,
  ButtonsContainer,
  Container,
  ContentContainer,
  ImgContainer,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
  TecnologiesContainer
} from "./style";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMocha,
  SiChai,
  SiMysql
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import React from "react";

const Components = {
  javascript: SiJavascript,
  react: SiReact,
  tailwindcss: SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss3,
  node: FaNode,
  mysql: SiMysql,
  mocha: SiMocha,
  chai: SiChai,
};

export default function ProjectCard({ name, description, image, tecnologies, codeLink, projectLink }) {
  return (
    <Container>
      <ImgContainer>
        <ProjectImage src={image} alt={name} />
      </ImgContainer>

      <ContentContainer>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <TecnologiesContainer>
            {tecnologies.map((tec) => {
              return typeof Components[tec] !== "undefined" ? (
                React.createElement(Components[tec], {
                  key: tec,
                  size: "1.8em"
                })
              ) : null;
            })}
        </TecnologiesContainer>
      </ContentContainer>

      <ButtonsContainer>
        <ButtonBGPurple>
          <Button href={codeLink} target="_blank" rel="noreferrer noopener">
            <FiGithub size="1.5em" className='inline mr-2' />
            View Code
          </Button>
        </ButtonBGPurple>

        {projectLink && (
          <ButtonBGBlue>
            <Button href={projectLink} target="_blank" rel="noreferrer noopener">
              <HiLink size="1.5em" className='inline mr-2' />
              Open Project
            </Button>
          </ButtonBGBlue>
        )}
      </ButtonsContainer>
    </Container>
  )
}