import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Looking For Long Term Tech Solutions? <br/>This is Definitely The place To Be..
      </SectionTitle>
      <SectionText>My Main Goal Is Not To Build Something You Will Probably Just Like For a Short Period Of Time,Your Idea Can Become Reality And Not Just That...Security is the Main Priority</SectionText>
      <Button onClick={() => window.location ='https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;