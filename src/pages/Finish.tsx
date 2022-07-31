import { Avatar, Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import React, { useContext, useLayoutEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import BoxContainer from "../components/BoxContainer"
import PrimaryButton from "../components/PrimaryButton"
import userContext from "../context/userContext"
import getImageUrl from "../functions/getImageUrl"
import AppLayout from "../layouts/AppLayout"

type User = { name: string; img: { type: "Buffer"; data: number[] } | null }

const Finish = () => {
    const {
        partner: { partners },
        user: { partnerCount },
    } = useContext(userContext)
    const navigate = useNavigate()

    const avatarSize = useBreakpointValue({ base: "190px", md: "220px" })
    const avatarInset = useBreakpointValue({ base: "90px", md: "120px" })

    useLayoutEffect(() => {
        if (!partners.length) {
            navigate("/", { replace: true })
        }
    }, [navigate, partners])

    return (
        <AppLayout>
            <BoxContainer
                Button={
                    partnerCount - 1 > partners.length && (
                        <Link to={"/"}>
                            <PrimaryButton>Find one more</PrimaryButton>
                        </Link>
                    )
                }
            >
                {partners.length > 0 && (
                    <Flex direction="column" alignItems="center" maxHeight="calc(100vh - 240px)" gap="6">
                        <Text fontSize="4xl" fontWeight="bold" color="mainBtn.900">
                            Congratulation!
                        </Text>
                        <Text fontSize="xl" color="mainBtn.700">
                            Your match is:
                        </Text>
                        {partners.length > 1 ? (
                            <Box position="relative" width="100%" maxWidth="390px" minWidth="350px" height={`calc(${avatarSize!} + ${avatarInset!})`}>
                                <Avatar
                                    position="absolute"
                                    top="0"
                                    left="10px"
                                    width={avatarSize}
                                    height={avatarSize}
                                    name={partners[0].name}
                                    src={getImageUrl(partners[0].img?.data)}
                                    boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                                />
                                <Avatar
                                    position="absolute"
                                    top={avatarInset}
                                    right="10px"
                                    width={avatarSize}
                                    height={avatarSize}
                                    name={partners[0].name}
                                    src={getImageUrl(partners[1].img?.data)}
                                    boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                                />
                            </Box>
                        ) : (
                            <Avatar
                                width="210"
                                height="210"
                                name={partners[0].name}
                                src={getImageUrl(partners[0].img?.data)}
                                boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                            />
                        )}
                        <Flex direction={["column", "row"]} gap={2}>
                            {partners.map((user, index) => (
                                <Box
                                    backgroundColor="#FFFFFF"
                                    border="0.5px solid rgba(0, 0, 0, 0.23)"
                                    boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                                    borderRadius="full"
                                    py="3"
                                    px="6"
                                >
                                    <Text textAlign="center" color="mainBtn.700" fontWeight={500} fontSize="17px" textTransform="uppercase">
                                        {user.name}
                                    </Text>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                )}
            </BoxContainer>
        </AppLayout>
    )
}

export default Finish
