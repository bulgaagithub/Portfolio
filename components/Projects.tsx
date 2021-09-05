import { Box, Text, Grid } from '@chakra-ui/layout'
import React from 'react'
import Card from './Card/ProjectCard'
import Title from './Title'
import { projects } from '../data/index'

export default function Projects() {
    return (
        <Box mt="20">
            <section id='projects'>
                <Title title="Projects" />
                <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={3}>
                    {projects.data.map((p,i) => <Card
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
