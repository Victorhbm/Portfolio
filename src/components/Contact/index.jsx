import { GoMailRead } from 'react-icons/go';
import { Button, Container, Input, InputContainer, MainContainer, Section, SectionTitle, TextArea, TitleSpan } from "./style";

export default function Contact({ bgDark }) {
  return (
    <Section bgDark={bgDark}>
      <Container>
        <SectionTitle>
          Get in <TitleSpan>touch</TitleSpan>
        </SectionTitle>
        <MainContainer>
          <form
            action="https://formsubmit.co/victor.hugofla@hotmail.com"
            method="POST"
          >
            <InputContainer>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                bgDark={bgDark}
              />
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
                bgDark={bgDark}
              />
            </InputContainer>
            <TextArea
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              required
              bgDark={bgDark}
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/" />
            <Button type="submit">
              Submit
            </Button>
          </form>

          <div className="portrait:hidden">
            <GoMailRead size="15rem" className="mx-auto" />
          </div>
        </MainContainer>
      </Container>
    </Section>
  );
};
