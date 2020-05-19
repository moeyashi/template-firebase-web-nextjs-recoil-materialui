import App from "components/App";
import { Typography, Button } from "@material-ui/core";
import { useCounterValue, useSetCounter } from "hooks/states/useCounter";

const CountUpButton = () => {
  const setCount = useSetCounter();
  const handleClick = () => {
    setCount((currVal) => currVal + 1);
  };
  return <Button onClick={handleClick}>count up</Button>;
};

const CountDownButton = () => {
  const setCount = useSetCounter();
  const handleClick = () => {
    setCount((currVal) => currVal - 1);
  };
  return <Button onClick={handleClick}>count down</Button>;
};

const Count = () => {
  const count = useCounterValue();
  return <Typography>count: {count}</Typography>;
};

export default function IndexPage() {
  return (
    <App>
      <Typography variant="h1">hello world</Typography>
      <Count />
      <CountUpButton />
      <CountDownButton />
    </App>
  );
}
