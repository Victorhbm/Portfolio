import Header from "../../components/Header";
import { Container, Paragraph, TextContainer } from "./style";
import { BiMailSend } from 'react-icons/bi'
import Footer from "../../components/Footer";

export default function ThanksPage() {
  return (
    <Container>
      <div>
        <Header />
        <TextContainer>
          <BiMailSend size="15rem" className="mx-auto" />
          <Paragraph>
            Thank you for getting in touch
          </Paragraph>
          <Paragraph>
            I will answer your message as soon as possible
          </Paragraph>
        </TextContainer>
      </div>
      <Footer />
    </Container>
  );
}