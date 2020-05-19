import * as React from "react";
import NextLink from "next/link";
import { AppBar, Toolbar, Link, Button } from "@material-ui/core";
import {
  useFirebaseUserValue,
  useFirebaseLogout,
} from "hooks/states/useFirebaseUser";

const Logout = () => {
  const logout = useFirebaseLogout();
  return (
    <Button color="inherit" onClick={async () => await logout()}>
      logout
    </Button>
  );
};

const User = () => {
  const user = useFirebaseUserValue();
  return user ? (
    <>
      {user.uid}
      <Logout />
    </>
  ) : (
    <NextLink href="/login" passHref>
      <Button color="inherit">login</Button>
    </NextLink>
  );
};

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <div style={{ flexGrow: 1 }}>
        <NextLink href="/" passHref>
          <Link color="inherit">Home</Link>
        </NextLink>
      </div>
      <User />
    </Toolbar>
  </AppBar>
);

export default Header;
