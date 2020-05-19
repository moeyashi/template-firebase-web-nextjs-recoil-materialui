import { useFirebaseSignUp } from "hooks/states/useFirebaseUser";
import { useCreateUser } from "hooks/states/useUser";

export const useSignUp = () => {
  const signup = useFirebaseSignUp();
  const createUser = useCreateUser();
  return async (email: string, password: string) => {
    await signup(email, password);
    await createUser();
  };
};
