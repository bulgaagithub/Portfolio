import React from 'react'
import Image from 'next/image';

import { Box, Divider, Flex, Text, Link } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/react';
import { HiExternalLink } from "react-icons/hi"

type Link = {
    link: string
    icon: any
}

type Props = {
    title: string,
    from: {
        month: string,
        year: string
    },
    to: {
        month: string,
        year: string
    }
    image: string,
    url: string,
}

const Card: React.FC<Props> = ({ title, from, to, image, url }) => {
    return <Flex justifyContent="space-between" flexDirection="column"
                rounded="lg" boxShadow="lg"
                bg={useColorModeValue("white", "gray.700")}
                _hover={{ boxShadow: useColorModeValue("1px 1px 3px 2px #d2d2d2", "1px 1px 5px 2px #fff")}}
            >
                <Flex justifyContent="center" marginY={2}>
                    <Image
                        width={100}
                        height={100}
                        src={image}
                        alt=""
                    />
                </Flex>
                <Box flexGrow={1} p="4">
                    {title}
                    <Text fontSize="0.9rem">Expires on {to.month}, {to.year}</Text>
                </Box>
                <Divider />
                <Box px={4} py={2}>
                    <Link href={url} isExternal><HiExternalLink size="30px" /></Link>
                </Box>
        </Flex>
}

export default Card;
