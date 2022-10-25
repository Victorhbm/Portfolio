import Header from "../../components/Header";
import Contact from "../../components/Contact";
import { Container } from "./style";

export default function ContactPage() {
  return (
    <Container>
      <Header />
      <Contact bgDark={true} />
    </Container>
  );
}