import { Box, Divider, Flex } from '@chakra-ui/layout'
import React from 'react'

export default function Footer() {
    return (
        <Box mt={20}>
            <Flex justifyContent="center" alignItems="center" p={5}>
                Made with ❤️ by EB
            </Flex>
        </Box>
    )
}
