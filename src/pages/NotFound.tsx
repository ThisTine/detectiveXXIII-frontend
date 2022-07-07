import { Box, Container, Heading, Stack,Text } from '@chakra-ui/react'
import Lottie from "lottie-react";
import soonAnimation from '../animation/soon.json'
const Notfound = () => {
  return (
    <Stack justifyContent={"center"} alignItems="center" w="100%" h="100vh">
        <Box padding={"50px"} bg="whiteAlpha.800" w="100%" rounded={"lg"} border="1px solid" borderColor={"gray.300"} backdropFilter="blur(20px)"  >
        <Heading textAlign={"center"} color="gray.800" size={"2xl"} >404</Heading>
        <Text textAlign={"center"} >Not found</Text>
            <Container w="100%" maxW="sm" >
            <Lottie animationData={soonAnimation} loop={true}  />
            </Container>
        </Box>
    </Stack>
  )
}

export default Notfound