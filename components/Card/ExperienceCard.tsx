import React from 'react'
// Components
import { Box, Flex, Text } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/react'

// Types
type Props = {
    role: string
    company: string
    desc?: string
    date: string,
}

const ExperienceCard: React.FC<Props> = ({ role, company, desc, date }) => {
    return (
        <Flex justifyContent='space-between' flexDirection='column'
            rounded='lg' boxShadow='lg'
            bg={useColorModeValue('whiteAlpha.100', 'gray.700')}
            _hover={{ boxShadow: useColorModeValue('1px 1px 3px 2px #d2d2d2', '1px 1px 5px 2px #fff') }}
            >
            <Box flexGrow={1} roundedTop='lg' bg={useColorModeValue('white', 'whiteAlpha.100')} p='16'>
                <Text textAlign='center' fontSize='lg' fontWeight='extrabold'>{company}</Text>
            </Box>
            <Box p={4} >
                <Text fontSize='md'>{role}</Text>
                <Text fontSize='sm'>{date}</Text>
                <Text textAlign='justify' fontSize='0.7rem'>{desc}</Text>
            </Box>
        </Flex>
    )
}

export default ExperienceCard;
