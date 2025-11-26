import { createContext } from "react";

export const ContextTodoItems = createContext(
  {
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {}
  }
);