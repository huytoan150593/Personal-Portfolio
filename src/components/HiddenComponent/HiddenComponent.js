import React from 'react';
import { Box, Boxes, BoxNum, BoxText } from '../Acomplishments/AcomplishmentsStyles';
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { otherProjects } from '../../constants/constants';
export const HiddenComponent = () => {
  return (
    <>
    <SectionTitle>Others</SectionTitle>
        <Boxes>
            {otherProjects.map((card, index) => (
            <Box onClick={() => open(card.link)} 
                 key={index} 
                 style = {{backgroundImage : 'url("images/deepsea.jpg")'}}
                 id = "box">
                <BoxNum>{card.name}</BoxNum>
                <BoxText>{card.description}</BoxText>
            </Box>
            ))}
        </Boxes>
    <SectionDivider/>
    </>
  )
}
