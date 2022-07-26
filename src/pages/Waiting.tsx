import { Box, Flex, Input, Text, useBoolean } from "@chakra-ui/react"
import { ChangeEvent, useContext, useState } from "react"
import BoxContainer from "../components/BoxContainer"
import PrimaryButton from "../components/PrimaryButton"
import AppLayout from "../layouts/AppLayout"
import { useToast } from "@chakra-ui/react"
import { FormControl } from "@chakra-ui/react"
import userContext from "../context/userContext"
import api from "../hooks/useAxios"

type year = 1 | 2

// func submit
// oncilck use func submit

const Waiting = () => {
    const {user} = useContext(userContext)
    const [code, setCode] = useState("")
    const toast = useToast()
    const [isLoading, { on, off }] = useBoolean()

    const Submit = async() => {
        on()
        try{
           const res = await api.sendCode({code : code})
           console.log(res)
        }catch (err : any) {
            Error(err.response.data)
            console.log(err);
          }
        
        
        
    }
    const Error = (text: string) => {
        toast({
            title: "Error.",
            description: text,
            status: "error",
            duration: 9000,
            position: "top-right",
            isClosable: true,
        })
    }

    return (
        <div>
            <AppLayout>
                {user?.year === 1 ? ( // Wating Page year 1
                    <BoxContainer Button={<PrimaryButton onClick={() => Submit().finally(off) } isLoading={isLoading}>Pair</PrimaryButton>}>
                        <Flex align="center" justify="center" flexDirection={["column"]}>
                            <Box mb={10}>
                                <Text fontSize={40} color={"#AD89FF"} textAlign={["center"]}>
                                    ADD CODE
                                </Text>
                            </Box>
                            <Box>
                                <FormControl as="form" borderColor={"#A37BFF"}>
                                    <Input
                                        id="CODE"
                                        width="auto"
                                        p={6}
                                        bg="whiteAlpha.500"
                                        boxShadow="lg"
                                        borderRadius={60}
                                        placeholder="PUT CODE HERE"
                                        _placeholder={{ color: "#A37BFF" }}
                                        textColor={"#A37BFF"}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                                        textAlign={["center"]}
                                    />
                                </FormControl>
                            </Box>
                        </Flex>
                    </BoxContainer> // Wating Page year 2
                ) : (
                    <BoxContainer>
                        <Flex align="center" justify="center" flexDirection={["column"]}>
                            <Box mb={10}>
                                <Text fontSize={40} color={"#AD89FF"} textAlign={["center"]}>
                                    STATUS
                                </Text>
                            </Box>
                            <Box
                                mb={20}
                                bg="whiteAlpha.500"
                                width="50%"
                                boxShadow="lg"
                                border={"1px solid #A37BFF"}
                                borderRadius={50}
                                p={4}
                                color="white"
                            >
                                <Text fontSize={24} color={"#AD89FF"} textAlign={["center"]}>
                                    Pairing...
                                </Text>
                            </Box>
                        </Flex>
                    </BoxContainer>
                )}
            </AppLayout>
        </div>
    )
}

export default Waiting
