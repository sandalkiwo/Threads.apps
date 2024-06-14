import { useRecoilValue } from "recoil";
import LoginCard from "../components/Login";
import SignupCard from "../components/SignupCart";
import authscreenAtom from "../atoms/authAtom";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authscreenAtom);

  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
