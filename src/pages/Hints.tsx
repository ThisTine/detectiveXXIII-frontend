import { useState } from "react";

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
  return <div>Hints</div>;
};

export default Hints;
