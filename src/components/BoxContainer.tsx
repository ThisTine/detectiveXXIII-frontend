import { Box, Button, Container, VStack } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'



const BoxContainer:FC<{children:ReactNode,Button?:ReactNode}> = ({children,Button}) => {
  return (
    <Box border="1px solid"
     borderColor={"white"}
     shadow="lg"
      bg="#EBDCFC"
       w="100%" rounded={"3xl"}  display="flex" justifyContent={"center"} p={5}>
      <Container maxW="lg" >
        {children}
        {Button && <VStack transform={"translateY(100%)"} >{Button}</VStack>}
        </Container>
    </Box>
  )
}

export default BoxContainer