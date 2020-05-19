import App from "components/App";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useSignUp } from "hooks/usecases/useSignUp";

export default function IndexPage() {
  const router = useRouter();
  const signup = useSignUp();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      await signup(mail, password);
    } catch (e) {
      alert(e);
      return;
    }
    router.push("/");
  };
  return (
    <App>
      <form>
        <TextField
          label="email"
          autoComplete="email"
          onChange={(e) => setMail(e.currentTarget.value)}
        />
        <TextField
          type="password"
          label="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button onClick={handleLogin}>signup</Button>
      </form>
      <NextLink href="/login" passHref>
        <Button>login</Button>
      </NextLink>
    </App>
  );
}
