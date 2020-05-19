import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const counterState = atom({
  key: "counterState",
  default: 0,
});

export const useCounterValue = () => useRecoilValue(counterState);
export const useSetCounter = () => useSetRecoilState(counterState);
