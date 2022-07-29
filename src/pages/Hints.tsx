import HintCards from "../components/HintCards"
import AppLayout from "../layouts/AppLayout"
import { FaUnlock } from "react-icons/fa"
import { useContext, useLayoutEffect, useState } from "react"
import { Button, Heading, Icon, Flex, Box, useBoolean } from "@chakra-ui/react"
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"
import api from "../hooks/useAxios"
import userContext from "../context/userContext"
import { useAppToast } from "../hooks/toast"
import HintCardsLoading from "../components/HIntCardsLoading"

type hints = { userId: 1 | 2; hint: string; isShow: boolean }[]
type life = number

const Hints = () => {
    const [isLoading, { on, off }] = useBoolean()
    const toast = useAppToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [hints, setHints] = useState<hints>([])
    const { user, mutateLife } = useContext(userContext)
    const [current, setCurrent] = useState(1) // เก็บ num page
    const [initializing, { on: perd, off: pid }] = useBoolean()
    //array user 1  filter
    const user1 = hints.filter((obj) => obj.userId === 1)
    const user2 = hints.filter((obj) => obj.userId === 2)
    const init = async () => {
        try {
            const { data } = await api.getHints()
            setHints(data.hints)
        } catch (error: any) {
            console.log(error)
        }
    }
    useLayoutEffect(() => {
        perd()
        init().finally(pid)
    }, [])

    const renderButton = () => {
        if (user2.length != 0) {
            return (
                <Flex>
                    <Button marginRight="2" bg={current === 1 ? "purple.200" : "white"} width="50px" height="30px" onClick={() => setCurrent(1)}>
                        1
                    </Button>
                    <Button marginRight="2" bg={current === 2 ? "purple.200" : "white"} width="50px" height="30px" onClick={() => setCurrent(2)}>
                        2
                    </Button>
                </Flex>
            )
        } else {
            return <Flex />
        }
    }
    const onYes = async () => {
        on()
        try {
            const { data } = await api.openHint()
            setHints(data.hints)
            mutateLife(3)
            off()
            onClose()
        } catch (error: any) {
            console.log(error)
            off()
            toast.error("can't open hint", { description: error.response.data })
        }
    }
    //render hint each page
    const renderUser = () => {
        if (current === 1) {
            return user1.map((hint, index) => {
                return <HintCards key={index} hints={hint} id={index} />
            })
        } else {
            return user2.map((hint, index) => {
                return <HintCards key={index} hints={hint} id={index} />
            })
        }
    }
    if (initializing) {
        return (
            <AppLayout nav flexDirection="column" gap={{ base: "2", sm: "3" }}>
                <Heading color="#BDA2FF" fontWeight="light" mt={10}>
                    LIST OF HINTS
                </Heading>
               {[...Array(10)].map((_, index) => <HintCardsLoading key={index}/>)}
            </AppLayout>
        )
    }
    return (
        <AppLayout nav flexDirection="column" gap={{ base: "2", sm: "3" }}>
            <Heading color="#BDA2FF" fontWeight="light" mt={10}>
                LIST OF HINTS
            </Heading>
            {renderButton()}
            {renderUser()}
            <Button
                bg="#BDA2FF"
                width="80px"
                height="80px"
                textColor="white"
                rounded="full"
                _hover={{ textColor: "black", bg: "lightgrey" }}
                onClick={onOpen}
            >
                <Icon as={FaUnlock} w={5} h={5} />
            </Button>
            <Box width="100%" height="30px"></Box>
            {/* modal part */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Open 1 more hints</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        you are about to spend 3 lifes on a hint. <br />
                        are you sure that you would like to see this hint ?
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme="purple" onClick={onYes} isDisabled={!(user.lifes >= 3)} isLoading={isLoading}>
                            Yes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </AppLayout>
    )
}

export default Hints
