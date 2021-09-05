import React from 'react'
// Components
import { Box, Flex } from '@chakra-ui/layout'

const Footer: React.FC = () => {
    return (
        <Box mt={20}>
            <Flex justifyContent="center" alignItems="center" p={5}>
                Made with ❤️ by EB
            </Flex>
        </Box>
    )
}

export default Footer
