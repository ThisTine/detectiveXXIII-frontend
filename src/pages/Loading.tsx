import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import soonAnimation from "../animation/soon.json";
const Loading = () => {
  return (
    <Stack justifyContent={"center"} alignItems="center" w="100%" h="100vh">
      <Container w="100%" maxW="sm">
        <Lottie animationData={soonAnimation} loop={true} />
      </Container>
      <Heading textAlign={"center"} color="gray.700" size={"2xl"}>
        LOADING...
      </Heading>
    </Stack>
  );
};

export default Loading;
