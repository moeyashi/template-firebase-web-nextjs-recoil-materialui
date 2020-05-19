import { atom, useSetRecoilState, useRecoilValue } from "recoil";
import { firebaseAuth } from "lib/firebase";

export const firebaseUserState = atom<firebase.User>({
  key: "firebaseUserState",
  default: firebaseAuth ? firebaseAuth.currentUser : null,
  dangerouslyAllowMutability: true,
});

export const useFirebaseSignUp = () => {
  const setter = useSetRecoilState(firebaseUserState);
  return async (email: string, password: string) => {
    const user = await firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    setter(user.user);
  };
};

export const useFirebaseLogin = () => {
  const setter = useSetRecoilState(firebaseUserState);
  return async (email: string, password: string) => {
    const user = await firebaseAuth.signInWithEmailAndPassword(email, password);
    setter(user.user);
  };
};

export const useFirebaseLogout = () => {
  const setter = useSetRecoilState(firebaseUserState);
  return async () => {
    await firebaseAuth.signOut();
    setter(null);
  };
};

export const useFirebaseUserValue = () => useRecoilValue(firebaseUserState);
