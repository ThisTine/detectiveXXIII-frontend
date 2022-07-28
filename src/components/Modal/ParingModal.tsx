import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    VStack,
    Heading,
    Container,
    Text,
    Box,
} from "@chakra-ui/react"
import Lottie from "lottie-react"
import { FC } from "react"
import Confetti from "react-confetti"
import { Link } from "react-router-dom"
import paringFailed from "../../animation/paring_failed.json"
import paringSuccess from "../../animation/paring_success.json"

const ParingModal: FC<{ isOpen: boolean; onClose: () => void; isSuccess?: boolean }> = ({ isOpen, onClose, isSuccess }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            {isSuccess && <Confetti />}
            <ModalOverlay />
            <ModalContent>
                <ModalHeader />
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <Container maxW={"56"}>
                            <Lottie animationData={isSuccess ? paringSuccess : paringFailed} />
                        </Container>
                        <Heading color={isSuccess ? "green.600" : "red.600"}>{isSuccess ? "Paring Success !" : "Paring Failed"}</Heading>
                        <Text fontSize={isSuccess ? "xl" : "3xl"}>
                            {isSuccess ? "But you still have 1 more, keep trying " : "Don't be sad, keep trying !"}
                        </Text>
                        {isSuccess && (
                            <Box>
                                <Button size="lg" shadow={"lg"} colorScheme={"green"} rounded="full" mt={5}>
                                    <Link to={"/finish"}>See who you just paired with !</Link>
                                </Button>
                            </Box>
                        )}
                    </VStack>
                </ModalBody>

                <ModalFooter />
            </ModalContent>
        </Modal>
    )
}

export default ParingModal
