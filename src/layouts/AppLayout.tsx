import { Box, Container, ContainerProps, useBreakpointValue } from "@chakra-ui/react"
import { FC, ReactNode, useState } from "react"
import NavBarDesktop from "../components/NavBar/NavBarDesktop"
import NavBarMobile from "../components/NavBar/NavBarMobile"

interface AppLayoutInterface extends ContainerProps  {
    children: ReactNode,
    nav?: boolean
}

const AppLayout:FC<AppLayoutInterface> = (props) => {
  const isMobile = useBreakpointValue({base:true,md:false})
  const [isNav] = useState<boolean>(props.nav || false)
  return (
    <Box width={"100%"} minH="100vh" >
      {isNav && <NavBarDesktop isMobile={isMobile || false} />}
        <Container w="100%" maxW={"container.md"} minH="100vh" display={"flex"} justifyContent="center" alignItems={"center"} {...props} nav={null} />
      {(isNav && isMobile) && <NavBarMobile/>}
    </Box>
  )
}

export default AppLayout