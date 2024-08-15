import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br/>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I Have Worked With a variety of Technologies,from frontend to backend,design and even Cybersecurity</SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br/>React.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br/>Node and Databases</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="4rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with <br/>Tools like Figma</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
