import {
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Icon,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FaLock, FaCheck } from "react-icons/fa";
interface HintCardsProps {
  hints: { userId: 1 | 2; hint: string; isShow: boolean;};
  id : number;
}
function HintCards({ hints,id }:HintCardsProps) {
  return (
    <Box
      minW="300px"
      width={{ base: "50%", sm: "80%" }}
      boxShadow="md"
      p="4"
      rounded="lg"
      bg="white"
    >
      <Flex alignItems="center" justifyContent="space-between" gap="2">
        <Flex alignItems="center">
          <Flex
            bg={hints.isShow ? "green.100" : "red.100"}
            width="50px"
            height="50px"
            rounded="lg"
            justifyContent="center"
            alignItems="center"
            marginRight={3}
          >
            <Icon as={hints.isShow ? FaCheck : FaLock} />
          </Flex>
          <Flex flexDirection="column">
            <Heading as="h3" size="sm" fontWeight="semibold">
              HINT {id+1}
            </Heading>
            <UnorderedList>
              <ListItem
                color="#4f4f4f"
                filter="auto"
                blur={hints.isShow ? "0px" : "5px"}
              >
                {hints.hint}
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Badge
          ml="1"
          colorScheme={hints.isShow ? "green" : "red"}
          variant="outline"
        >
          {hints.isShow ? "Unlocked" : "Locked"}
        </Badge>
      </Flex>
    </Box>
  );
}
export default HintCards;
