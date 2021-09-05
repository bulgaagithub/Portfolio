import React from 'react'
import {
    Image,
    forwardRef,
    ChakraProps,
    chakra,
    ComponentWithAs,
    Box,
    useColorModeValue
} from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";
export type MotionBoxProps = Omit<
    ChakraProps,
    keyof MotionProps
> &
    MotionProps & {
        as?: React.ElementType;
    };

export const MotionBox = motion(
    forwardRef<ChakraProps, "div">((props, ref) => {
        return <chakra.div ref={ref} {...props} />;
    })
) as ComponentWithAs<"div", MotionBoxProps>;

const Avatar = () => {
    return (
        <Box h="300px">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
                <Image
                    boxShadow="2xl"
                    borderRadius="full"
                    border="2px" 
                    borderWidth="15px" 
                    borderColor="white"
                    objectFit="cover"
                    boxSize="300px"
                    src="/img/profile.jpeg"
                    alt="EB"
                />
            </motion.div>
        </Box>
    )
}

export default Avatar;
