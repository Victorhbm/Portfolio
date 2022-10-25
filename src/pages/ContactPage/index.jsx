import Header from "../../components/Header";
import Contact from "../../components/Contact";
import { Container } from "./style";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <Container>
      <div>
        <Header />
        <Contact bgDark={true} />
      </div>
      <Footer />
    </Container>
  );
}