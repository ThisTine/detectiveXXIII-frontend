import {
  Badge,
  Box,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  useToast,
  CloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import AppLayout from "../layouts/AppLayout";
import Setup, { checkError, hints } from "../pages/Setup";
import BoxContainer from "./BoxContainer";
import PrimaryButton from "./PrimaryButton";

function HintCard({
  text,
  index,
  onEdit,
}: {
  text: string;
  index: number;
  onEdit: (index: number) => void;
}) {
  return (
    <Box
      maxW="container.md"
      width={{ base: "100%", sm: "80%" }}
      boxShadow="md"
      p="4"
      rounded="3xl"
      bg="white"
      cursor="pointer"
      onClick={() => {
        onEdit(index);
      }}
    >
      <Flex alignItems="center" justifyContent="space-between" gap="2">
        <Flex gap="5" alignItems="center">
          <Box bg="#EBDCFC" p="5" rounded="lg"></Box>
          <VStack alignItems="flex-start">
            <Heading as="h3" size="sm">
              Hint {index + 1}
            </Heading>
            <HStack>
              <Text fontSize="8" color="gray.200">
                <BsCircleFill />
              </Text>
              <Text>{text}</Text>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}

function ListHint({
  hints,
  setHints,
}: {
  hints: string[];
  setHints: React.Dispatch<React.SetStateAction<hints>>;
}) {
  const [indexHint, setIndexHint] = useState(-1);
  const [input, setInput] = useState("");
  const onEdit = (index: number) => {
    setIndexHint(index);
  };
  const SubmitHints = () => {
    console.log(hints);
  };
  const toast = useToast();
  const toastError = () => {
    if (checkError(input, hints)) {
      toast.closeAll();
      toast({
        position: "top",
        title: "Fail",
        status: "error",
        variant: "left-accent",
        isClosable: true,
        duration: 3000,
        description: checkError(input, hints),
      });
    }
  };
  useEffect(() => {
    if (indexHint !== -1) {
      setInput(hints[indexHint]);
    }
  }, [indexHint]);

  const EditHint = () => {
    setHints(hints.map((hint, index) => (index === indexHint ? input : hint)));
    setInput("");
    setIndexHint(-1);
  };

  const isErrorByL = input.length > 10;
  const isErrorByrepeat = hints.includes(input);
  if (indexHint > -1) {
    return (
      <AppLayout nav flexDirection={"column"} maxW="md">
        <BoxContainer
          Button={
            <PrimaryButton
              onClick={EditHint}
              onMouseOver={toastError}
              isDisabled={!!checkError(input, hints)}
            >
              <HStack>
                <Text>SUBMIT </Text>
                <AiOutlineArrowRight />
              </HStack>
            </PrimaryButton>
          }
        >
          <Flex justifyContent="flex-end" position="relative" left="10px">
            <CloseButton onClick={() => setIndexHint(-1)} />
          </Flex>
          <Box minH="200">
            <Text textAlign="center" color="#A680FF" fontSize="3xl">
              EDIT HINT
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
                  onChange={(event) => {
                    setInput(event.target.value);
                  }}
                  isInvalid={isErrorByL || isErrorByrepeat}
                />

                <FormErrorMessage
                  color="#FF0000"
                  fontWeight="600"
                  fontSize="16"
                  width="100%"
                >
                  <Text textAlign="center" width="100%">
                    {checkError(input, hints)}
                  </Text>
                </FormErrorMessage>
              </FormControl>
            </Center>
          </Box>
        </BoxContainer>
      </AppLayout>
    );
  }
  return (
    <AppLayout nav flexDirection={"column"} maxW="lg">
      <Stack justifyContent="center" width="100%" py={20}>
        <Box minH="500">
          <Text
            textAlign="center"
            color="#A680FF"
            fontSize="3xl"
            fontWeight="medium"
            textShadow="0px 4px 11px rgba(0, 0, 0, 0.25)"
            mb={10}
          >
            LIST OF HINTS
          </Text>
          <VStack gap={3}>
            {hints.map((text, index) => (
              <HintCard key={index} {...{ text, index, onEdit }} />
            ))}
            <PrimaryButton onClick={SubmitHints}>Submit</PrimaryButton>
          </VStack>
        </Box>
      </Stack>
    </AppLayout>
  );
}

export default ListHint;
