import React from 'react';
import { useState } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { HiddenComponent } from '../HiddenComponent/HiddenComponent';

const Hero = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
     setShow(!show);
  }

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            <span>Welcome To</span> <br />
            <span>My Personal Portfolio</span>
          </SectionTitle>
          <SectionText>
            To be a programmer is to develop a carefully managed relationship with error. There’s no getting around it. You either make your accommodations with failure, or the work will become intolerable.
          </SectionText>
          <Button onClick={handleClick}>Learn More</Button>
          {show && <HiddenComponent />}
        </LeftSection>
      </Section>
    </>
  );
}
export default Hero;