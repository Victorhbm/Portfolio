import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import { Container } from "./style";

export default function ProjectsPage() {
  return (
    <Container>
      <Header />
      <Projects />
      <Footer />
    </Container>
  );
}