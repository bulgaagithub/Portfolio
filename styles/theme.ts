import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
const theme = extendTheme({
    styles: {
        global: (props) => ({
            "html, body": {
                fontFamily: "Poppins",
                color: mode("gray.800", "whiteAlpha.900")(props),
                bg: mode("gray.100", "gray.800")(props),
                lineHeight: "base",
            },
        })
    },
    fonts: {
        heading: "Poppins.400",
        body: "Poppins.100",
    },
})
export default theme
