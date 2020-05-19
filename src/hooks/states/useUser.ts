import { atom, useRecoilState } from "recoil";
import firebase, { firestore, firebaseAuth } from "lib/firebase";
import { useEffect } from "react";
import { useFirebaseUserValue } from "./useFirebaseUser";

type User = { todos: string[] };

const userState = atom<User>({
  key: "todosState",
  default: undefined,
  dangerouslyAllowMutability: true,
});

export const useUser = () => {
  const firebaseUser = useFirebaseUserValue();
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    if (firebaseUser) {
      const unsubscribe = firestore
        .doc(`users/${firebaseUser.uid}`)
        .onSnapshot((snap) => {
          setUser(snap.data() as User);
        });
      return () => unsubscribe();
    }
  });
  return user;
};

export const useCreateUser = () => {
  return async () => {
    const firebaseUser = firebaseAuth.currentUser;
    if (!firebaseUser) {
      alert("ログインしてください");
      return;
    }
    await firestore.doc(`users/${firebaseUser.uid}`).set({
      todos: [],
    });
  };
};

export const useAddTodo = () => {
  return async (todo: string) => {
    const firebaseUser = firebaseAuth.currentUser;
    if (!firebaseUser) {
      alert("ログインしてください");
      return;
    }
    await firestore.doc(`users/${firebaseUser.uid}`).update({
      todos: firebase.firestore.FieldValue.arrayUnion(todo),
    });
  };
};
