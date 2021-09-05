import { Text } from '@chakra-ui/layout'
import React from 'react'

type Props = {
    title: string
}

const Title: React.FC<Props> = ({ title }) => {
    return (
        <Text textAlign="center" fontWeight="extrabold" fontSize="2xl" textTransform="uppercase">{title}</Text>
    )
}


export default Title
