import HintCards from "../components/HintCards";
import AppLayout from "../layouts/AppLayout";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { Button, Icon } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

type hints = { userId: 1 | 2; hint: string; isShow: boolean }[];
type life = 0 | 1 | 2 | 3 | 4 | 5;

const mockhints: hints = [
  { userId: 1, hint: "Lx building", isShow: true },
  { userId: 2, hint: "Lx building", isShow: false },
  { userId: 1, hint: "Lx building", isShow: false },
  { userId: 2, hint: "Lx building", isShow: false },
  { userId: 1, hint: "Lx building", isShow: false },
  // { userId: 2, hint: "ทดสอบ", isShow: true },
  // { userId: 1, hint: "ทดสอบ", isShow: true },
  // { userId: 2, hint: "ทดสอบ", isShow: true },
  // { userId: 1, hint: "ทดสอบ", isShow: true },
  // { userId: 2, hint: "ทดสอบ", isShow: true },
  // { userId: 1, hint: "ทดสอบ", isShow: false },
  // { userId: 2, hint: "ทดสอบ", isShow: false },
  // { userId: 1, hint: "ทดสอบ", isShow: false },
  // { userId: 2, hint: "ทดสอบ", isShow: false },
  // { userId: 1, hint: "ทดสอบ", isShow: false },
  // { userId: 2, hint: "ทดสอบ", isShow: false },
  // { userId: 1, hint: "ทดสอบ", isShow: false },
  // { userId: 1, hint: "ทดสอบ", isShow: false },
];

const Hints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hints] = useState<hints>(mockhints);
  const [life] = useState<life>(0);
  return (
    <AppLayout nav flexDirection="column" gap={{ base: "2", sm: "5" }}>
      {mockhints.map((hints, index) => {
        return <HintCards key={index} hints={hints} id={index} />;
      })}
      <Button
        bg="#BDA2FF"
        width="80px"
        height="80px"
        textColor="white"
        rounded="full"
        _hover={{ textColor: "black" , bg:"lightgrey"}}
        onClick={onOpen}
      >
        <Icon as={FaLock} w={6} h={6} />
      </Button>
      {/* ***modal part */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Open 1 more hints</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          you are about to spend 3 lifes on a hint. <br />
          are you sure that you would like to see this hint ?
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button  colorScheme='purple'>Yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </AppLayout>
  );
};

export default Hints;
