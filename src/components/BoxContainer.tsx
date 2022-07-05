import { Box, Container } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'



const BoxContainer:FC<{children:ReactNode}> = ({children}) => {
  return (
    <Box border="1px solid"
     borderColor={"gray.200"}
      bgGradient="linear(to-br, purple.100, purple.300)"
       w="100%" borderRadius={5} display="flex" justifyContent={"center"} p={5}>
      <Container maxW="lg" >
        {children}
        </Container>
    </Box>
  )
}

export default BoxContainer