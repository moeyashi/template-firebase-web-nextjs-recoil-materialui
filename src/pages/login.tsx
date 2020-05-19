import App from "components/App";
import { TextField, Button, Link } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";
import { useFirebaseLogin } from "hooks/states/useFirebaseUser";
import NextLink from "next/link";

export default function IndexPage() {
  const router = useRouter();
  const login = useFirebaseLogin();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      await login(mail, password);
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
          type="email"
          label="email"
          autoComplete="email"
          onChange={(e) => setMail(e.currentTarget.value)}
        />
        <TextField
          type="password"
          label="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button onClick={handleLogin}>login</Button>
      </form>
      <NextLink href="/signup" passHref>
        <Link>新規登録はこちら</Link>
      </NextLink>
    </App>
  );
}
