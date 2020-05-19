import { FC, useState } from "react";
import { useAddTodo } from "hooks/states/useUser";
import { TextField, Button } from "@material-ui/core";

export const AddTodo: FC = () => {
  const addTodo = useAddTodo();
  const [todo, setTodo] = useState("");
  return (
    <form>
      <TextField onChange={(e) => setTodo(e.currentTarget.value)} />
      <Button onClick={() => addTodo(todo)}>add todo</Button>
    </form>
  );
};
