import { useColorMode } from '@chakra-ui/color-mode';
import React, { useEffect, useState } from 'react'
import { FaHandPointUp } from 'react-icons/fa'
import { TopButton } from './styles'

export default function ScrollTop() {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 20) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 20) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => window.removeEventListener('scroll', checkScrollTop);
    });

    const { colorMode } = useColorMode()

    return (
        <>
            <TopButton
                showScroll={showScroll}
                color={colorMode}
                aria-label="Scroll Top Button" 
                onClick={scrollTop} 
                title="Go to top"
                className=""
            >
                <FaHandPointUp />
            </TopButton>
        </>
    )
}
