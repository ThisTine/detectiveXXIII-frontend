import { Box, Button, Heading, useBreakpointValue, VStack } from "@chakra-ui/react"
import { useContext } from "react"
import { BsMicrosoft, BsUmbrella } from "react-icons/bs"
import { Navigate } from "react-router-dom"
import userContext from "../context/userContext"
import AppLayout from "../layouts/AppLayout"

const Login = () => {
    const isWeb = useBreakpointValue({ xs: false, lg: true })
    const { user } = useContext(userContext)

    if (user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <AppLayout maxW={"container.sm"}>
            <VStack spacing={10} p={10} minH="100px">
                <Box
                    rounded="full"
                    backgroundColor="white"
                    width="192px"
                    height="192px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="mainBtn.700"
                >
                    {/* TODO: Change to incognito logo */}
                    <BsUmbrella size="100px" />
                </Box>
                <Heading textAlign={"center"} fontWeight={500} color="mainBtn.700" textTransform={"uppercase"}>
                    Login {isWeb && "/ Register"}
                </Heading>
                <Button colorScheme={"mainBtn"} color="white" size="lg" rounded="full" as="a" href={`${import.meta.env.VITE_BASEURL}/auth`}>
                    <Box mr={5}>
                        <BsMicrosoft />
                    </Box>
                    Login with Microsoft
                </Button>
            </VStack>
        </AppLayout>
    )
}

export default Login
