import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: "TOEIC Test", date: '2017/03', score: "550/990" },
  { title: "JLPT N2", date: '2020/12', score: "126/180" },
  { title: "Java Certify 3", date: '2021/12', score: "80/100" },
  { title: "J-Pet", date: '2022/1', score: "620/900"}
];

const Acomplishments = () => (
  <Section id="certification">
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>Date: {card.date}</BoxText>
          <BoxText>Score: {card.score}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
