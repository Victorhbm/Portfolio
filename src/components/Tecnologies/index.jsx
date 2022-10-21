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
import { IconContext } from "react-icons";
import {
  SectionTitle,
  TecnologiesContainer,
  TecnologiesContent,
  SectionSubtitle,
  Container
} from "./style";

export default function Tecnologies() {
  return (
    <section className="bg-dark-200 text-light">
      <Container>
        <SectionTitle>
          My <span className="text-blue">Skills</span>
        </SectionTitle>

        <IconContext.Provider value={{ size: "2em" }}>
          <SectionSubtitle>Frontend</SectionSubtitle>
          <TecnologiesContainer>
            <TecnologiesContent>
              <SiJavascript className="mr-3 text-blue"/>
              <p>JavaScript</p>
            </TecnologiesContent>
            <TecnologiesContent>
              <SiTypescript className="mr-3 text-blue"/>
              <p>TypeScript</p>
            </TecnologiesContent>
            <TecnologiesContent>
              <SiReact className="mr-3 text-blue"/>
              <p>React</p>
            </TecnologiesContent>
            <TecnologiesContent>
              <SiTailwindcss className="mr-3 text-blue"/>
              <p>Tailwind CSS</p>
            </TecnologiesContent>
            <TecnologiesContent>
              <SiStyledcomponents className="mr-3 text-blue"/>
              <p>styled-components</p>
            </TecnologiesContent>
          </TecnologiesContainer>

          <SectionSubtitle>Backend</SectionSubtitle>
          <TecnologiesContainer>
            <TecnologiesContent>
              <FaNode className="mr-3 text-blue"/>
              <p>Node</p>
            </TecnologiesContent>
            <TecnologiesContent>
              <SiMysql className="mr-3 text-blue"/>
              <p>MySQL</p>
            </TecnologiesContent>
            <TecnologiesContent>
              <SiMongodb className="mr-3 text-blue"/>
              <p>MongoDB</p>
            </TecnologiesContent>
            <TecnologiesContent>
              <SiSequelize className="mr-3 text-blue"/>
              <p>Sequelize</p>
            </TecnologiesContent>
          </TecnologiesContainer>
        </IconContext.Provider>

        <SectionSubtitle>Also know</SectionSubtitle>
        <TecnologiesContainer>
          <TecnologiesContent>Python</TecnologiesContent>
          <TecnologiesContent>Git & GitHub</TecnologiesContent>
          <TecnologiesContent>REST API</TecnologiesContent>
          <TecnologiesContent>OOP</TecnologiesContent>
          <TecnologiesContent>SOLID</TecnologiesContent>
          <TecnologiesContent>Docker</TecnologiesContent>
          <TecnologiesContent>VS Code</TecnologiesContent>
          <TecnologiesContent>Jest</TecnologiesContent>
          <TecnologiesContent>Mocha, Chai & Sinon</TecnologiesContent>
        </TecnologiesContainer>
      </Container>
    </section>
  )
}