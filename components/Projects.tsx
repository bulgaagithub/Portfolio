import React from 'react'
import { Box, Text, SimpleGrid } from '@chakra-ui/layout'
import Card from './Card/ProjectCard'
import Title from './Title'
import { projects } from '../data/index'

const Projects: React.FC = () => {
    return (
        <Box mt={[10, 20]}>
            <section id='projects'>
                <Title title="Projects" />
                <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={3}>
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
                </SimpleGrid>
            </section>
        </Box>
    )
}

export default Projects
