import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey There <br />
        I'm a Frontend Developer
      </SectionTitle>
      <SectionText>
        My perpose is new and modern looking website , It is my hobby and
        passion
      </SectionText>
      <Button onClick={() => (window.location = 'ahmedrimon377472@gmail.com')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
