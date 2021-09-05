import React from 'react'
import { Box, Text, Grid } from '@chakra-ui/layout'
import Card from './Card/ProjectCard'
import Title from './Title'
import { projects } from '../data/index'

const Projects: React.FC = () => {
    return (
        <Box mt="20">
            <section id='projects'>
                <Title title="Projects" />
                <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={3}>
                    {projects.data?.map((p,i) => <Card
                        links={p.links ? p.links : []}
                        isMobile={p.isMobile}
                        key={p.projectName + i}
                        url={p.isMobile ? "" : p.url}
                        projectName={<Text fontSize="2xl"
                            fontWeight="bold">{p.projectName}</Text>}
                        tech={p.tech}
                        description={p.projectDesc}
                    />)}
                </Grid>
            </section>
        </Box>
    )
}

export default Projects
