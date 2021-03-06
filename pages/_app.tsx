import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
// Styles
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"
import "animate.css"
import '../styles/globals.css'
import theme from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Navigation />
                <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    )
}
export default MyApp
