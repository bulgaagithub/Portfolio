import React from 'react'
// Components
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Stack, useColorModeValue, Link } from '@chakra-ui/react'
// Icons
import { HiExternalLink } from 'react-icons/hi'
// Types
type Link = {
    link: string
    icon: any
}
type Props = {
    projectName: any
    tech: string[]
    url?: string
    description: string,
    isMobile: boolean,
    links: Link[]
}

const Card: React.FC<Props> = ({ projectName, tech, url, description, isMobile, links }) => {
    return (
        <Flex justifyContent='space-between' flexDirection='column'
            rounded='lg' boxShadow='lg'
            bg={useColorModeValue('white', 'gray.700')}
            _hover={{ boxShadow: useColorModeValue('1px 1px 3px 2px #d2d2d2', '1px 1px 5px 2px #fff') }}>
            <Box flexGrow={1} p='4'>
                {projectName}
                <Text fontSize='0.9rem'>{description}</Text>
                {tech && <Stack spacing='5px' direction='row' flexWrap='wrap'>
                    <Text fontSize='sm' fontWeight='bold'>Technologies:</Text>
                    {tech.map(t => <Text key={t} fontSize='sm'>{t}</Text>)}
                </Stack>}
            </Box>
            <Divider />
            <Box px={4} py={2}>
                {!isMobile ?
                    <Flex alignItems='center' justifyContent='flex-start'>
                        <Link href={url} isExternal><HiExternalLink size='30px' /></Link>
                    </Flex> : <Stack direction='row'>
                        {
                            links?.map((item, i) => <Link key={'link#' + i} isExternal href={item.link}>{item.icon}</Link>)
                        }
                    </Stack>
                }
            </Box>
        </Flex>
    )
}

export default Card;
