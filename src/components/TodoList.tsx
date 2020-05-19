import { FC } from "react";
import { useUser } from "hooks/states/useUser";
import { List, ListItem, ListItemText } from "@material-ui/core";

export const TodoList: FC = () => {
  const user = useUser();
  return (
    <List>
      {user?.todos.map((todo, idx) => (
        <ListItem key={idx}>
          <ListItemText primary={todo} />
        </ListItem>
      ))}
    </List>
  );
};
