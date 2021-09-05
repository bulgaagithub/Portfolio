import React from 'react'
import type { NextPage } from 'next'
// Components
import { Box, Flex } from '@chakra-ui/react'
import Avatar from '../components/Avatar'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experiences from '../components/Experiences'
import ScrollTop from '../components/ScrollTop'
import DisplayLottie from '../components/Intro/DisplayLottie'
import Greeting from '../components/Intro/Greeting'
// Data
import { illustration } from '../data'

const Home: NextPage = () => {
    return (
        <>
            <SEO
                title="Portfolio"
                meta_name="description"
                content="Software Developer Portfolio inspired by https://github.com/saadpasta/developerFolio"
            />
            <Layout>
                <Flex justify="center" mt="10%" alignSelf="flex-start" direction={["column", null, "row"]} align="center" px={{ sm: "20px" }}>
                    <Box flexGrow={1} flexShrink={0}>
                        {illustration ? <DisplayLottie /> : <Avatar />}
                    </Box>
                    <Box mt={[1,0]} ml={{ md: 6 }}>
                        <Greeting />
                    </Box>
                </Flex>
                <Skills />
                <Experiences />
                <Projects />
            </Layout>
            <ScrollTop />
        </>
    )
}

export default Home
