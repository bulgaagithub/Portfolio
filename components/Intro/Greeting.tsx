import React from 'react'
// Components
import { Box, Stack, Text } from '@chakra-ui/react'
import Contact from '../Contact'
// Data
import { greeting } from '../../data'

export default function Greeting() {
    if (!greeting.displayGreeting) {
        return null;
    }
    return (
        <Box py={[1, null, 3]}>
            <Box>
                <Text className="animate__animated animate__bounceInLeft" align={["center", null, "left"]} fontSize={['3xl','5xl']} fontWeight="bold" fontFamily="Poppins.100" mb={3}>{greeting.title}</Text>
                <Text align="justify" fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
                    {greeting.subTitle}
                </Text>
                <Stack my={'5%'} spacing="3" direction="row" justify={{ sm: "center", md: "flex-start" }}>
                    <Contact />
                </Stack>
            </Box>
        </Box>
    )
}
