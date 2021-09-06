import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <SectionSubText>HTML</SectionSubText>
            <SectionSubText>CSS</SectionSubText>
            <SectionSubText>JavaScript</SectionSubText>
            <SectionSubText>React.js</SectionSubText>
            <SectionSubText>JQuery</SectionSubText>
            <SectionSubText>Material-UI</SectionSubText>
            <SectionSubText>Styled-components</SectionSubText>
            <SectionSubText>Bootstrap</SectionSubText>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <SectionSubText>Node.js</SectionSubText>
            <SectionSubText>Express</SectionSubText>
            <SectionSubText>MySQL</SectionSubText>
            <SectionSubText>MongoDB</SectionSubText>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            <SectionSubText>Figma</SectionSubText>
            <SectionSubText></SectionSubText>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineFundProjectionScreen size="3rem" />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Experience with <br />
            <SectionSubText>Agile Development</SectionSubText>
            <SectionSubText>Project Management</SectionSubText>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
