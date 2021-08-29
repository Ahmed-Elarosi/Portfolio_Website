import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a web developer that comes from an Accounting and Business
        Background. Through my past experiences, I can balance the need of users
        and businesses to understand their pain points and how I can contribute
        as a Front-End Developer and solve their problems.
      </SectionText>
      <Button onClick={() => (window.location = "/#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
