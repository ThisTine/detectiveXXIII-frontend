import React, { useState } from "react";
import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import BoxContainer from "../components/BoxContainer";
import PrimaryButton from "../components/PrimaryButton";
import AppLayout from "../layouts/AppLayout";
import { AiOutlineArrowRight } from "react-icons/ai";
import ListHint from "../components/ListHint";
export type hints = string[];

export const checkError = (input: string, hints: string[]) => {
  const isErrorByL = input.length > 10;
  const isErrorByrepeat = hints.includes(input);
  const isErrorByEmpty = input.length === 0;
  if (isErrorByL) {
    return "WE ONELY ALLOW 10 LETTERS FOR HINTS !";
  } else if (isErrorByrepeat) {
    return "Your hint is already in the list.";
  } else if (isErrorByEmpty) {
    return "Put your hint before submit.";
  } else {
    return "";
  }
};
const Setup = () => {
  const [hints, sethints] = useState<hints>([
    "อันนี้ hint",
    "อันนี้ก็ hints",
    "อันนู้น hint",
    "อันนั้นก็ hint",
    "นู่น",
    "นี่",
    "นั่น",
    "8",
    "9",
  ]);
  const [input, setInput] = useState("");
  const InputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInput(e.target.value);

  const submit = () => {
    sethints([...hints, input]);
    setInput("");
  };
  const isErrorByL = input.length > 10;
  const isErrorByrepeat = hints.includes(input);
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

  const toast = useToast();
  if (hints.length < 10) {
    return (
      <AppLayout nav flexDirection={"column"} maxW="md">
        <Text color="#A680FF" fontSize="xl" alignSelf="flex-end" mr={4}>
          {hints.length + 1} of 10
        </Text>

        <BoxContainer
          Button={
            <PrimaryButton
              onClick={submit}
              onMouseOver={toastError}
              isDisabled={!!checkError(input, hints)}
              cursor="pointer"
            >
              <HStack>
                <Text>{hints.length === 9 ? "Review" : "NEXT"} </Text>
                <AiOutlineArrowRight />
              </HStack>
            </PrimaryButton>
          }
        >
          <Box minH="200">
            <Text textAlign="center" color="#A680FF" fontSize="3xl">
              ADD HINT
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
  } else {
    return <ListHint hints={hints} setHints={sethints} />;
  }
};

export default Setup;
