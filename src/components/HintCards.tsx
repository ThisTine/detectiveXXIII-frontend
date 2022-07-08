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
function HintCards(props) {
  return (
    <Box minW="300px" width={{base:"100%",sm:"80%"}} boxShadow="md" p="4" rounded="lg" bg="white">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <Flex
          gap="5"
          alignItems="center"
        >
          <Box bg="#C6F6D5" p="5" rounded="lg">
            <Icon as={FaCheck}></Icon>
          </Box>
          <Heading as="h3" size="sm">
            Hint 1
          </Heading>
          <UnorderedList>
            <ListItem>Go to Lx building</ListItem>
          </UnorderedList>
        </Flex>
        <Badge ml="1" colorScheme="green" variant='outline'>
          Unlocked
        </Badge>
      </Flex>
    </Box>
  );
}
export default HintCards;
