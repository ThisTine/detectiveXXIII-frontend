import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BsCircleFill } from "react-icons/bs";
import AppLayout from "../layouts/AppLayout";
import { setupContext } from "../pages/Setup";

import PrimaryButton from "./PrimaryButton";
function HintCard({ text, index }: { text: string; index: number }) {
  const { onEdit } = useContext(setupContext);
  return (
    <Box
      maxW="container.md"
      width={{ base: "100%", sm: "80%" }}
      boxShadow="md"
      p="4"
      rounded="3xl"
      bg="white"
      cursor="pointer"
      transition={"all 0.2s ease-in-out"}
      _hover={{ bg: "pink.50", transform: "scale(1.05)" }}
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

function ListHint({ hints }: { hints: string[] }) {
  const SubmitHints = () => {
    console.log(hints);
  };

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
              <HintCard key={index} {...{ text, index }} />
            ))}
            <PrimaryButton onClick={SubmitHints}>Submit</PrimaryButton>
          </VStack>
        </Box>
      </Stack>
    </AppLayout>
  );
}

export default ListHint;
