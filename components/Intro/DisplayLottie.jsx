import React from "react";
import discovery from "../../public/lottie/discovery.json";
import Lottie from "react-lottie";
import { Box } from "@chakra-ui/layout";

export default function DisplayLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: discovery,
  };
  return (
    <Box>
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
    </Box>
  );
}
