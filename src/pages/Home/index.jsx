import Header from "../../components/Header";
import Projects from "../../components/Projects";
import SectionAbout from "../../components/Introductory";
import Tecnologies from "../../components/Tecnologies";
import { Container, MainSection } from "./style";

export default function Home() {
  return (
    <Container>
      <MainSection>
        <Header />
        <SectionAbout />
      </MainSection>
      <Tecnologies />
      <Projects />
    </Container>
  )
}