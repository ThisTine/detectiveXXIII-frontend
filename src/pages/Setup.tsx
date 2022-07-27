import React, { createContext, useContext, useState } from "react"
import { Box, Center, CloseButton, Flex, FormControl, FormErrorMessage, HStack, Input, Text } from "@chakra-ui/react"
import BoxContainer from "../components/BoxContainer"
import PrimaryButton from "../components/PrimaryButton"
import AppLayout from "../layouts/AppLayout"
import { AiOutlineArrowRight } from "react-icons/ai"
import ListHint from "../components/ListHint"
export type hints = string[]
import { useAppToast } from "../hooks/toast"
import api from "../hooks/useAxios"
import userContext from "../context/userContext"
import { Navigate } from "react-router-dom"

export const setupContext = createContext({
    onEdit: (index: number) => {},
})

export const checkError = (input: string, hints: string[]) => {
    const isErrorByL = input.length > 10
    const isErrorByrepeat = hints.includes(input)
    const isErrorByEmpty = input.length === 0
    if (isErrorByL) {
        return "WE ONLY ALLOW 10 LETTERS FOR HINTS !"
    } else if (isErrorByrepeat) {
        return "Your hint is already in the list."
    } else if (isErrorByEmpty) {
        return "Put your hint before submit."
    } else {
        return ""
    }
}
const Setup = () => {
    const [hints, sethints] = useState<hints>([])
    const [input, setInput] = useState("")

    const InputChange = (e: { target: { value: React.SetStateAction<string> } }) => setInput(e.target.value)

    const [indexHint, setIndexHint] = useState(-1)
    const EditHint = () => {
        sethints(hints.map((hint, index) => (index === indexHint ? input : hint)))
        setInput("")
        setIndexHint(-1)
    }
    const onEdit = (index: number) => {
        setIndexHint(index)
        setInput(hints[index])
    }
    const submit = () => {
        sethints([...hints, input])
        setInput("")
    }
    const toast = useAppToast({ position: "top" })
    const isErrorByL = input.length > 10
    const isErrorByrepeat = hints.includes(input)
    const toastError = () => {
        if (checkError(input, hints)) {
            toast.error("Fail", { description: checkError(input, hints) })
        }
    }

    if (hints.length < 10 || indexHint > -1) {
        return (
            <AppLayout flexDirection={"column"} maxW="md">
                {indexHint > -1 ? (
                    <Flex justifyContent="flex-end" position="relative" width="100%">
                        <CloseButton onClick={() => setIndexHint(-1)} />
                    </Flex>
                ) : (
                    <Text color="#A680FF" fontSize="xl" alignSelf="flex-end" mr={4}>
                        {hints.length + 1} of 10
                    </Text>
                )}

                <BoxContainer
                    Button={
                        <PrimaryButton onClick={indexHint > -1 ? EditHint : submit} isDisabled={!!checkError(input, hints)} cursor="pointer">
                            <HStack>
                                <Text>{indexHint > -1 ? "SUBMIT" : hints.length === 9 ? "Review" : "NEXT"}</Text>
                                <AiOutlineArrowRight />
                            </HStack>
                        </PrimaryButton>
                    }
                >
                    <Box minH="200">
                        <Text textAlign="center" color="#A680FF" fontSize="3xl">
                            {indexHint > -1 ? "EDIT" : "ADD HINT"}
                        </Text>
                        <Center h={150} textAlign="center">
                            <FormControl isInvalid={isErrorByL || isErrorByrepeat}>
                                <Input
                                    borderColor="#A680FF"
                                    focusBorderColor="#A680FF"
                                    backgroundColor="rgba(255,255,255,0.4)"
                                    shadow={20}
                                    rounded="full"
                                    boxShadow="lg"
                                    htmlSize={22}
                                    width="auto"
                                    placeholder="PUT YOUR HINT HERE"
                                    textAlign="center"
                                    _placeholder={{ color: "#A680FF" }}
                                    size="lg"
                                    id="hint"
                                    value={input}
                                    onChange={InputChange}
                                    isInvalid={isErrorByL || isErrorByrepeat}
                                />

                                <FormErrorMessage color="#FF0000" fontWeight="600" fontSize="16" width="100%">
                                    <Text textAlign="center" width="100%">
                                        {checkError(input, hints)}
                                    </Text>
                                </FormErrorMessage>
                            </FormControl>
                        </Center>
                    </Box>
                </BoxContainer>
            </AppLayout>
        )
    } else {
        return (
            <setupContext.Provider value={{ onEdit }}>
                <ListHint hints={hints} />
            </setupContext.Provider>
        )
    }
}

const SetUpWithRedirect = () => {
    const {
        user: { status },
    } = useContext(userContext)
    if (status === "filling_hints") return <Setup />
    return <Navigate to="/" />
}

export default SetUpWithRedirect
