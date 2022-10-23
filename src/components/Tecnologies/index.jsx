import React from "react";
import {
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiSequelize
} from "react-icons/si";
import { FaNode } from "react-icons/fa"
import {
  SectionTitle,
  TecnologiesContainer,
  TecnologiesContent,
  SectionSubtitle,
  Container,
  Section,
  TitleSpan
} from "./style";
import skills from '../../assets/data/skills';

const icons = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  'styled-components': SiStyledcomponents,
  Node: FaNode,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Sequelize: SiSequelize,
};

export default function Tecnologies() {
  return (
    <Section>
      <Container>
        <SectionTitle>
          My <TitleSpan>Skills</TitleSpan>
        </SectionTitle>

        <SectionSubtitle>Frontend</SectionSubtitle>
        <TecnologiesContainer>
          {skills.frontend.map((skill) => (
            <TecnologiesContent key={skill}>
              {React.createElement(icons[skill], {
                size: "2em",
                color: '#00D2DF'
              })}
              <p>{skill}</p>
            </TecnologiesContent>
          ))}
        </TecnologiesContainer>

        <SectionSubtitle>Backend</SectionSubtitle>
        <TecnologiesContainer>
          {skills.backend.map((skill) => (
            <TecnologiesContent key={skill}>
              {React.createElement(icons[skill], {
                size: "2em",
                color: '#00D2DF'
              })}
              <p>{skill}</p>
            </TecnologiesContent>
          ))}
        </TecnologiesContainer>

        <SectionSubtitle>Also know</SectionSubtitle>
        <TecnologiesContainer>
          {skills.others.map((skill) => (
            <TecnologiesContent key={skill}>
              <p>{skill}</p>
            </TecnologiesContent>
          ))}
        </TecnologiesContainer>
      </Container>
    </Section>
  )
}