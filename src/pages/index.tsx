import App from "components/App";
import { Typography, Button, Paper, Grid, Container } from "@material-ui/core";
import { useCounterValue, useSetCounter } from "hooks/states/useCounter";
import { TodoList } from "components/TodoList";
import { AddTodo } from "components/AddTodo";

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
  return <>count: {count}</>;
};

export default function IndexPage() {
  return (
    <App>
      <Container>
        <Typography variant="h1">hello world</Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Paper>
              <Count />
              <CountUpButton />
              <CountDownButton />
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <AddTodo />
              <TodoList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </App>
  );
}
