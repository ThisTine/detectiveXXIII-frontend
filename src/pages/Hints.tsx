import { Box, Center, Icon, Input, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import BoxContainer from "../components/BoxContainer";
import PrimaryButton from "../components/PrimaryButton";
import AppLayout from "../layouts/AppLayout";
import { start } from "repl";

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
  return (
    <AppLayout nav flexDirection={"column"} maxW="md">
      <Text color="#A680FF" fontSize="xl" alignSelf="flex-end" mr={4}>
        1 of 10
      </Text>
      <BoxContainer
        Button={
          <PrimaryButton>
            NEXT
            <Icon as={ArrowForwardIcon} />
          </PrimaryButton>
        }
      >
        <Box minH="200">
          <Text textAlign="center" color="#A680FF" fontSize="3xl">
            ADD HINT
          </Text>
          <Center h={150}>
            <Input
              borderColor="#A680FF"
              focusBorderColor="#A680FF"
              backgroundColor="rgba(255,255,255,0.4)"
              shadow={20}
              rounded="full"
              boxShadow="lg"
              htmlSize={22}
              width="auto"
              id="hint"
              placeholder="PUT YOUR HINT HERE"
              textAlign="center"
              _placeholder={{ color: "#A680FF" }}
              size="md"
            />
          </Center>
        </Box>
      </BoxContainer>
    </AppLayout>
  );
};

export default Hints;
