import { Box, Grid } from '@chakra-ui/layout'
import React from 'react'
import Title from './Title'
import { workExperiences } from '../data'
import ExperienceCard from './Card/ExperienceCard'

export default function Experiences() {
    if (!workExperiences.display) {
        return null;
    }
    return (
        <Box mt="20">
            <section id='experiences'>
                <Title title="Experiences" />
                <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={3}>
                    {workExperiences.experience.map((e) =>
                        <ExperienceCard role={e.role} date={e.date} company={e.company} desc={e.desc} key={e.company} />
                    )}</Grid>
            </section>
        </Box>
    )
}
