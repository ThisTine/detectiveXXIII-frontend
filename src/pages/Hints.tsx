import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { SetStateAction, useState } from "react";
import BoxContainer from "../components/BoxContainer";
import PrimaryButton from "../components/PrimaryButton";
import AppLayout from "../layouts/AppLayout";

type hints = { userId: 1 | 2; hint: string; isShow: boolean }[];
type life = 0 | 1 | 2 | 3 | 4 | 5;

const mockhints: hints = [
  { userId: 1, hint: "ทดสอบ", isShow: true },
  { userId: 2, hint: "ทดสอบ", isShow: true },
  { userId: 1, hint: "ทดสอบ", isShow: true },
  { userId: 2, hint: "ทดสอบ", isShow: true },
  { userId: 1, hint: "ทดสอบ", isShow: true },
  { userId: 2, hint: "ทดสอบ", isShow: true },
  { userId: 1, hint: "ทดสอบ", isShow: true },
  { userId: 2, hint: "ทดสอบ", isShow: true },
  { userId: 1, hint: "ทดสอบ", isShow: true },
  { userId: 2, hint: "ทดสอบ", isShow: true },
  { userId: 1, hint: "ทดสอบ", isShow: false },
  { userId: 2, hint: "ทดสอบ", isShow: false },
  { userId: 1, hint: "ทดสอบ", isShow: false },
  { userId: 2, hint: "ทดสอบ", isShow: false },
  { userId: 1, hint: "ทดสอบ", isShow: false },
  { userId: 2, hint: "ทดสอบ", isShow: false },
  { userId: 1, hint: "ทดสอบ", isShow: false },
  { userId: 1, hint: "ทดสอบ", isShow: false },
];

const Hints = () => {
  const [hints] = useState<hints>(mockhints);
  const [life] = useState<life>(0);

  const [input, setInput] = useState("");
  const InputChange = (e: { target: { value: SetStateAction<string> } }) =>
    setInput(e.target.value);
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
            NEXT
            <Icon as={ArrowForwardIcon} />
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

export default Hints;
