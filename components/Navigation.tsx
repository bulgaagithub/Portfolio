import React from 'react'
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Stack,
    Text
} from '@chakra-ui/react'

import { FaMoon, FaSun, FaHamburger, FaWindowClose } from 'react-icons/fa'
import { Links, MainLogo } from '../data'

type Props = {
    title: any,
    href: string
}

const NavLink: React.FC<Props> = ({ title, href }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={href}
    >
        {title}
    </Link>
)

export default function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue('dark', 'light')
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    return (
        <>
            <Flex alignItems={'center'} justifyContent={'space-between'} px={5} py={3}>
                <IconButton
                    fontSize='lg'
                    size={'md'}
                    variant='ghost'
                    color='current'
                    icon={isOpen ? <FaWindowClose /> : <FaHamburger />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Link
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                        href={'/'}
                    >
                        <Text fontWeight='extrabold' fontSize="2xl">{MainLogo ? MainLogo : 'Logo'}</Text>
                    </Link>
                </HStack>
                <Flex alignItems={'center'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link.name} title={link.name} href={link.link} />
                            ))}
                        </HStack>
                    </HStack>
                    <IconButton
                        size='md'
                        fontSize='lg'
                        variant='ghost'
                        color='current'
                        marginLeft='2'
                        onClick={toggleColorMode}
                        icon={<SwitchIcon />}
                        aria-label={`Switch to ${text} mode`}
                    />
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link.name} title={link.name} href={link.link} />
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </>
    )
}
