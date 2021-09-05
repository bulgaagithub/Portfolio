import React from 'react'
import { Container } from '@chakra-ui/react'

const Layout: React.FC = ({ children }) => {
    return (
        <Container maxW="container.lg">
            {children}
        </Container>
    )
}

export default Layout
