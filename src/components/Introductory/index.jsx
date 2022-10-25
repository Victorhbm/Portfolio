import VictorPhoto from '../../assets/img/victor.jpg'
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { Button, ButtonBGBlue, ButtonBGPurple, ButtonsContainer, Container, ContentContainer, ImgContainer, SubTitle, TextContainer, Title } from './style';

export default function Introductory() {
  return (
    <Container>
      <ImgContainer>
        <img src={VictorPhoto} alt="Victor" />
      </ImgContainer>

      <ContentContainer>
        <TextContainer>
          <SubTitle>Hello, i am</SubTitle>
          <Title>Victor Hugo</Title>
          <SubTitle>Full Stack Developer</SubTitle>
        </TextContainer>

        <ButtonsContainer>
          <ButtonBGBlue>
            <Button href="https://www.linkedin.com/in/victorhbm/" target="_blank" rel="noreferrer noopener">
              <FiLinkedin size="1.5em" className='inline mr-2' />
              LinkedIn
            </Button>
          </ButtonBGBlue>
          
          <ButtonBGPurple>
            <Button href="https://github.com/Victorhbm" target="_blank" rel="noreferrer noopener">
              <FiGithub size="1.5em" className='inline mr-2' />
              GitHub
            </Button>
          </ButtonBGPurple>
        </ButtonsContainer>
      </ContentContainer>
    </Container>
  )
}