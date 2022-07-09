import React, { useState } from "react";
import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import BoxContainer from "../components/BoxContainer";
import PrimaryButton from "../components/PrimaryButton";
import AppLayout from "../layouts/AppLayout";
import { AiOutlineArrowRight } from "react-icons/ai";
type hints = string[];

const Setup = () => {
  const [hints, sethints] = useState<hints>(["อันนี้ hint", "อันนี้ก็ hints"]);
  const [input, setInput] = useState("");
  const InputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInput(e.target.value);
  const isError = input.length > 10;

  const toast = useToast();
  return (
    <AppLayout nav flexDirection={"column"} maxW="md">
      <Text color="#A680FF" fontSize="xl" alignSelf="flex-end" mr={4}>
        1 of 10
      </Text>
      <BoxContainer
        Button={
          <PrimaryButton
            onClick={() =>
              toast({
                position: "top",
                title: "Fail",
                status: "error",
                variant: "left-accent",
                isClosable: true,
                description: "You just added this hint !",
              })
            }
          >
            NEXT <AiOutlineArrowRight />
          </PrimaryButton>
        }
      >
        <Box minH="200">
          <Text textAlign="center" color="#A680FF" fontSize="3xl">
            ADD HINT
          </Text>
          <Center h={150} textAlign="center">
            <FormControl isInvalid={isError}>
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
                isInvalid={isError}
              />
              <FormErrorMessage color="#FF0000" fontWeight="600" fontSize="16">
                WE ONELY ALLOW 10 LETTERS FOR HINTS.
              </FormErrorMessage>
            </FormControl>
          </Center>
        </Box>
      </BoxContainer>
    </AppLayout>
  );
};

export default Setup;
