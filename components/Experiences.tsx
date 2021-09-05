import React from 'react'
// Components
import { Box, SimpleGrid } from '@chakra-ui/layout'
import Title from './Title'
import ExperienceCard from './Card/ExperienceCard'
// Data
import { workExperiences } from '../data'

const  Experiences: React.FC = () => {
    if (!workExperiences.display) {
        return null;
    }
    return (
        <Box mt={[10, null, 20]}>
            <section id='experiences'>
                <Title title="Experiences" />
                <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={3}>
                    {workExperiences.experience?.map((e) =>
                        <ExperienceCard role={e.role} date={e.date} company={e.company} desc={e.desc} key={e.company} />
                    )}
                </SimpleGrid>
            </section>
        </Box>
    )
}

export default Experiences
