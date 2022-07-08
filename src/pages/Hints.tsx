import HintCards from "../components/HintCards";
import AppLayout from "../layouts/AppLayout";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";

type hints = { userId: 1 | 2; hint: string; isShow: boolean }[];
type life = 0 | 1 | 2 | 3 | 4 | 5;

const mockhints: hints = [
  { userId: 1, hint: "ทดสอบ", isShow: true },
  { userId: 2, hint: "ทดสอบ", isShow: true },
  { userId: 1, hint: "ทดสอบ", isShow: true },
  { userId: 2, hint: "ทดสอบ", isShow: true },
  // { userId: 1, hint: "ทดสอบ", isShow: true },
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
  const [hints] = useState<hints>(mockhints);
  const [life] = useState<life>(0);
  return (
    <AppLayout nav flexDirection="column" gap="5" marginY="5">
      {mockhints.map((hints,index)=>{
        return <HintCards key={index} hints={hints} />
      })}
    </AppLayout>
  );
};

export default Hints;
