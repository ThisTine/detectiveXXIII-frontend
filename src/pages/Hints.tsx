import HintCards from "../components/HintCards";
import AppLayout from "../layouts/AppLayout";
import { FaUnlock } from "react-icons/fa";
import { useState } from "react";
import { Button, Heading, Icon, Flex } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

type hints = { userId: 1 | 2; hint: string; isShow: boolean; id: number }[];
type life = number;

const mockhints: hints = [
  { userId: 1, hint: "ทดสอบ 1", isShow: true, id: 1 },
  { userId: 1, hint: "ทดสอบ 1", isShow: false, id: 2 },
  { userId: 1, hint: "ทดสอบ 1", isShow: false, id: 3 },
  { userId: 1, hint: "ทดสอบ 1", isShow: false, id: 4 },
  { userId: 1, hint: "ทดสอบ 1", isShow: false, id: 5 },
  //if have user2
  { userId: 2, hint: "ทดสอบ 2", isShow: true, id: 1 },
  { userId: 2, hint: "ทดสอบ 2", isShow: false, id: 2 },
  { userId: 2, hint: "ทดสอบ 2", isShow: false, id: 3 },
  { userId: 2, hint: "ทดสอบ 2", isShow: false, id: 4 },
  { userId: 2, hint: "ทดสอบ 2", isShow: false, id: 5 },
];

const Hints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hints, setHints] = useState<hints>(mockhints);
  const [life, setLife] = useState<life>(5); // เก็บ life
  const [hintNum, setHintNum] = useState(1); //เก็บ num hint
  const [current, setCurrent] = useState(1); // เก็บ num page
  //array user 1  filter
  const user1 = hints.filter((obj) => obj.userId === 1);
  const user2 = hints.filter((obj) => obj.userId === 2);
  const renderButton = () =>{
    if(user2.length!=0){
      return (
        <Flex>
        <Button marginRight="2" bg="white" _hover={{ bg: "#C6F6D5" }} width="50px" height="30px" onClick={()=>setCurrent(1)}>
          1
        </Button>
        <Button marginRight="2" bg="white" _hover={{ bg: "#C6F6D5" }}  width="50px" height="30px" onClick={()=>setCurrent(2)}>
          2
        </Button>
      </Flex>
      );
    }
    else{
      return <Flex />;
    }
  }
  const onYes = () => {
    setLife(life - 3);
    setHintNum(hintNum + 1);
    setHints((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === hintNum + 1) {
          return { ...obj, isShow: true };
        }
        return obj;
      });

      return newState;
    });
    onClose();
  };
  //render hint each page
  const renderUser = () =>{
    if(current === 1){
      return(
        user1.map((hint, index) => {
          return <HintCards key={index} hints={hint} />;
        })
      );
    }
    else{
      return(
        user2.map((hint, index) => {
          return <HintCards key={index} hints={hint} />;
        })
      );
    }
  }
  return (
    <AppLayout nav flexDirection="column" gap={{ base: "2", sm: "3" }}>
      <Heading color="#BDA2FF" fontWeight="light">
        LIST OF HINTS
      </Heading>
      {
        renderButton()
      }
      {
        renderUser()
      }
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
      {/* ***modal part */}
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
            <Button
              colorScheme="purple"
              onClick={onYes}
              disabled={!(life >= 3)}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </AppLayout>
  );
};

export default Hints;
