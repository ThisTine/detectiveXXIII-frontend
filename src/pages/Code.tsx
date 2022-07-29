import React, { useEffect, useLayoutEffect, useState } from "react"
import BoxContainer from "../components/BoxContainer"
import AppLayout from "../layouts/AppLayout"
import { Text, Box, Center, Flex, Image } from "@chakra-ui/react"
import dayjs from "dayjs"
import api from "../hooks/useAxios"

type code = {
    code: string
    end: dayjs.Dayjs
}

const Code = () => {
    const [code, setCode] = useState<code>({
        code: "",
        end: dayjs().add(90, "s"),
    })
    const [time, setTime] = useState<null | number>(null)

    const getCode = async () => {
        try {
            const { data } = await api.getCode()
            await setCode({
                code: data.code,
                end: dayjs(data.end),
            })
            let now = dayjs()
            let end = dayjs(data.end)
            setTime(end.diff(now, "s"))
            if (data) {
                console.log(code)
            }
        } catch (err) {}
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (time && time > 0) {
                setTime((time) => (time === null ? null : time - 1))
            }
        }, 1000)
        return () => clearTimeout(timer)
    }, [time])

    useLayoutEffect(() => {
        if (time === 0 || time === null) {
            console.log("getting code", time)
            getCode()
        }
    }, [time])

    return (
        <AppLayout nav>
            <Flex width="396px">
                <BoxContainer>
                    <Center display="flex" flexDirection="column">
                        <>
                            <Box
                                textAlign="center"
                                background="rgba(255, 255, 255, 0.8)"
                                border="0.5px solid rgba(0, 0, 0, 0.23)"
                                boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                                backdropBlur="50px"
                                borderRadius="30px"
                                color="#AD89FF"
                                width="64px"
                                height="37px"
                                py={1}
                                marginBottom="31px"
                            >
                                {time} s
                            </Box>
                            <Center>
                                <Image
                                    src={`https://chart.googleapis.com/chart?chs=177x177&cht=qr&chl=${import.meta.env.VITE_WEBURL}?code=${
                                        code.code
                                    }&chld=H|1`}
                                    borderRadius={30}
                                    backgroundColor="rgba(255, 255, 255, 0.86)"
                                    boxShadow="0px 4px 11px rgba(0, 0, 0, 0.25)"
                                    backdropBlur="blur(50px)"
                                    width="269px"
                                    height="255px"
                                    padding="10px"
                                />
                            </Center>
                            <Center>
                                <Box
                                    backgroundColor="#FFFFFF"
                                    border="0.5px solid rgba(0, 0, 0, 0.23)"
                                    boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                                    backdropBlur="blur(50px)"
                                    borderRadius="15px"
                                    mt="49px"
                                    width="176px"
                                    height="53"
                                    py={3}
                                >
                                    <Text textAlign="center" color="#AD89FF" fontWeight={500} fontSize="17px">
                                        {code.code}
                                    </Text>
                                </Box>
                            </Center>
                        </>
                    </Center>
                </BoxContainer>
            </Flex>
        </AppLayout>
    )
}

export default Code
