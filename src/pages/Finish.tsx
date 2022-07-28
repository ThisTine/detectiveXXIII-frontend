import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import BoxContainer from "../components/BoxContainer"
import getImageUrl from "../functions/getImageUrl"
import AppLayout from "../layouts/AppLayout"
import mockimg from "../mockup/image.json"

type partners = {
    count: 1 | 2
    user: { name: string; img: { type: "Buffer"; data: number[] } }[]
}

const Finish = () => {
    const [partners] = useState<partners>({
        count: 2,
        user: [{ name: "Sittichok Ouamsiri", img: { type: "Buffer", data: mockimg } }],
    })

    return (
        <AppLayout nav>
            <BoxContainer>
                <Flex direction="column" alignItems="center" maxHeight="calc(100vh - 240px)" gap="3">
                    <Text fontSize="4xl" fontWeight="bold" color="mainBtn.900">
                        Congratulation!
                    </Text>
                    <Text fontSize="xl" color="mainBtn.700">
                        Your match is:
                    </Text>
                    <Avatar
                        width="210"
                        height="210"
                        name={partners.user[0].name}
                        src={getImageUrl(partners.user[0].img.data)}
                        boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                    />
                    <Spacer />
                    <Box
                        backgroundColor="#FFFFFF"
                        border="0.5px solid rgba(0, 0, 0, 0.23)"
                        boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                        borderRadius="full"
                        py="3"
                        px="6"
                    >
                        <Text textAlign="center" color="mainBtn.700" fontWeight={500} fontSize="17px" textTransform="uppercase">
                            {partners.user[0].name}
                        </Text>
                    </Box>
                </Flex>
            </BoxContainer>
        </AppLayout>
    )
}

export default Finish
