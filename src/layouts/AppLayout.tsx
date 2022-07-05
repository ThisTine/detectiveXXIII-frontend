import { Box, Container, ContainerProps } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

interface AppLayoutInterface extends ContainerProps  {
    children: ReactNode
}

const AppLayout:FC<AppLayoutInterface> = (props) => {
  return (
    <Box width={"100%"} h="100vh" >
        <Container w="100%" maxW={"container.lg"} minH="100vh" display={"flex"} justifyContent="center" alignItems={"center"} {...props} />
    </Box>
  )
}

export default AppLayout