import { Box, Button, Container, VStack } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import MissionBox from './MissionBox'



const BoxContainer:FC<{children:ReactNode,Button?:ReactNode,MissionBox?:ReactNode}> = ({children,Button,MissionBox}) => {
  return (
    <Box border="1px solid"
     borderColor={"white"}
     shadow="lg"
      bg="#EBDCFC"
       w="100%" rounded={"3xl"}  display="flex" justifyContent={"center"} p={5}>
      <Container maxW="lg" >
        {MissionBox && <VStack transform={'translateY(-100%)'} >{MissionBox}</VStack>}
        {children}
        {Button && <VStack transform={"translateY(100%)"} >{Button}</VStack>}
        </Container>
    </Box>
  )
}

export default BoxContainer