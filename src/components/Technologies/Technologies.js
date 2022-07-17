import React from 'react';
import { DiNodejsSmall, DiReact, DiJava, DiJavascript1, DiDatabase, DiLinux } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skill</SectionTitle>
    <SectionText>
      I've studied with a range technologies in the web development world. <br/>
      From Web, App To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>
            Create Website by <br />
            server side with NodeJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript1 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>
            Experience with <br />
            Web - App
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            Algorithms, solve problems,<br/>
            tasks on codesignal, leetcode
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MySQL</ListTitle>
          <ListParagraph>
            Analyst, Create Database <br/>
            with Command line
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>ReactJS</ListTitle>
          <ListParagraph>
            Create React App,<br/>
            JSX, Folder Structure, React Hooks
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiLinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Linux</ListTitle>
          <ListParagraph>
            Work on command line,<br/>
            Experience with LinuxOS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
