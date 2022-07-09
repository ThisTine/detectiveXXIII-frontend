import { Box, Container, VStack } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

const MissionContainer: FC<{ children: ReactNode, Button?: ReactNode, MissionBox?: ReactNode }> = ({ children, Button, MissionBox }) => {
  return (
    <Box
      border="1px solid"
      borderColor={"white"}
      shadow="lg"
      bg="#EBDCFC"
      w="100%"
      rounded={"3xl"}
      display="flex"
      justifyContent={"center"}
      p={0}
    >
      <Container
        maxW="lg"
        px={0}
        display='flex'
        justifyContent='center'
        flexDirection='column'
        gap='10'
      >
        {MissionBox && <VStack transform={"translateY(-100%)"} >{MissionBox}</VStack>}
        {children}
        {Button && <VStack transform={"translateY(50%)"} >{Button}</VStack>}
      </Container>
    </Box>
  )
}

export default MissionContainer;