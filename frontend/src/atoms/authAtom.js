import { atom } from "recoil";

const authscreenAtom = atom({
  key: "authscreenAtom",
  default: "login",
});

export default authscreenAtom;
