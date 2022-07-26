import { Button, Container, Heading, HStack, Tooltip, VStack } from "@chakra-ui/react"
import { FC, ReactNode, useContext } from "react"
import { Link } from "react-router-dom"
import NavBarData from "./NavBarData"
import { AiFillHeart, AiOutlineLogout } from "react-icons/ai"
import userContext from "../../context/userContext"

const ButtonIcon: FC<{ children: ReactNode; to: string; title: string }> = ({ children, to, title }) => {
    return (
        <Link {...{ to }}>
            <Tooltip label={title} aria-label={title}>
                <Heading color="#A680FF" cursor={"pointer"} transition="0.25s" _hover={{ color: "#9466FF" }} size={"xl"}>
                    {children}
                </Heading>
            </Tooltip>
        </Link>
    )
}

const NavBarDesktop: FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const { logout, user } = useContext(userContext)
    return (
        <HStack w="100%" pos="fixed" top={0} justifyContent="flex-end">
            <Container w="100%" maxW={"container.xl"} pt={10}>
                <VStack w="100%" alignItems={"flex-end"} gap={5}>
                    {!isMobile && (
                        <HStack gap={8}>
                            {NavBarData.map(({ Component, to, title }) => (
                                <ButtonIcon to={to} title={title} key={title}>
                                    {" "}
                                    <Component />{" "}
                                </ButtonIcon>
                            ))}
                        </HStack>
                    )}
                    <HStack>
                        <HStack bg="white" gap={2} p={2} px={3} shadow="lg" rounded="2xl">
                            <Heading size={"lg"} color="#F56565">
                                <AiFillHeart />
                            </Heading>
                            <Heading size={"lg"} color="#A680FF">
                                {user?.lifes}
                            </Heading>
                        </HStack>
                        <Button w="100%" h="100%" bg="white" onClick={logout} gap={2} p={2} px={3} shadow="lg" rounded="2xl">
                            {" "}
                            <Tooltip label="Logout">
                                <Heading size={"lg"} color="#F56565">
                                    {" "}
                                    <AiOutlineLogout />{" "}
                                </Heading>
                            </Tooltip>{" "}
                        </Button>
                    </HStack>
                </VStack>
            </Container>
        </HStack>
    )
}

export default NavBarDesktop
