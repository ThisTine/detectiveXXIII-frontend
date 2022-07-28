import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    VStack,
    Container,
    Heading,
    Button,
    ModalFooter,
} from "@chakra-ui/react"
import { FC } from "react"

const HintsModal: FC<{ isOpen: boolean; onClose: () => void; hints: string[] }> = ({ isOpen, onClose, hints }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Hints</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        {hints.map((item) => (
                            <Heading key={item} w="100%" p={3} bg="purple.600" rounded={"full"} textAlign="center" color={"white"} size="lg">
                                {item}
                            </Heading>
                        ))}
                    </VStack>
                </ModalBody>

                <ModalFooter />
            </ModalContent>
        </Modal>
    )
}

export default HintsModal
