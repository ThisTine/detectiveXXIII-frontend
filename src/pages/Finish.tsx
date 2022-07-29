import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import BoxContainer from "../components/BoxContainer"
import PrimaryButton from "../components/PrimaryButton"
import getImageUrl from "../functions/getImageUrl"
import AppLayout from "../layouts/AppLayout"
import mockimg from "../mockup/image.json"
import mockimg2 from "../mockup/image2.json"

type partners = {
    count: 1 | 2
    user: { name: string; img: { type: "Buffer"; data: number[] } }[]
}

const Finish = () => {
    const [partners, setPartners] = useState<partners>({
        count: 2,
        user: [{ name: "Sittichok Ouamsiri", img: { type: "Buffer", data: mockimg } }],
    })

    // Mockup function to simulate state of 2 partners
    const findMore = () => {
        setPartners((partners) => ({
            ...partners,
            user: [...partners.user, { name: "Pongsapak Lubkim", img: { type: "Buffer", data: mockimg2 } }],
        }))
    }

    return (
        <AppLayout nav>
            <BoxContainer Button={partners.count > partners.user.length && <PrimaryButton onClick={findMore}>Find one more</PrimaryButton>}>
                <Flex direction="column" alignItems="center" maxHeight="calc(100vh - 240px)" gap="6">
                    <Text fontSize="4xl" fontWeight="bold" color="mainBtn.900">
                        Congratulation!
                    </Text>
                    <Text fontSize="xl" color="mainBtn.700">
                        Your match is:
                    </Text>
                    {partners.user.length > 1 ? (
                        <Box position="relative" width="350px" height="300px">
                            <Avatar
                                position="absolute"
                                top="0"
                                left="0"
                                width="210"
                                height="210"
                                name={partners.user[0].name}
                                src={getImageUrl(partners.user[0].img.data)}
                                boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                            />
                            <Avatar
                                position="absolute"
                                top="90px"
                                right="0"
                                width="210"
                                height="210"
                                name={partners.user[0].name}
                                src={getImageUrl(partners.user[1].img.data)}
                                boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                            />
                        </Box>
                    ) : (
                        <Avatar
                            width="210"
                            height="210"
                            name={partners.user[0].name}
                            src={getImageUrl(partners.user[0].img.data)}
                            boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                        />
                    )}
                    <Flex direction={["column", "row"]} gap={2}>
                        {partners.user.map((user, index) => (
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
            </BoxContainer>
        </AppLayout>
    )
}

export default Finish
