import { Box, Flex, Grid, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import Title from './Title'
import { skillsSection } from '../data/index'

export default function Skills() {
    return (
        <Box mt="16">
            <section id="skills">
                <Title title={skillsSection.title} />
                {/* <Text textAlign="center" mt={3}>{skillsSection.subTitle}</Text> */}
                <Stack justifyContent="center" direction="row" flexWrap="wrap" mt={3} spacing="5" lineHeight="10">
                    {skillsSection.softwareSkills.map(i =>
                        <Flex key={i.skillName}
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                        >
                            {i.fontAwesomeClassname}
                            {i.skillName}
                        </Flex>)}
                </Stack>
            </section>
        </Box>
    )
}
