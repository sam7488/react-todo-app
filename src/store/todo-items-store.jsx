import { createContext } from "react";
import { useReducer } from "react";

export const ContextTodoItems = createContext(
  {
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {}
  }
);

const todoItemsReducer = (todoItems, action) => {
  switch(action.type) {
    case 'ADD_NEW_ITEM' :
      return [...todoItems, {
        name: action.payload.todoName,
        dueDate: action.payload.dueDate,
        id: action.payload.id,
      }]
    case 'DELETE_ITEM' : 
      return todoItems.filter(item => item.id != action.payload.id);
  }
}

export function ContextTodoItemsProvider({children}) {
  let [todoItems, dispathTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (todoName, dueDate, uuid) => {
    return dispathTodoItems({
      type : 'ADD_NEW_ITEM',
      payload : {
        todoName,
        dueDate,
        id: uuid,
      }
    })
  }

  const deleteItem = (id) => {
    return dispathTodoItems({
      type : 'DELETE_ITEM',
      payload : {
        id,
      }
    })
  }

  return (
    <ContextTodoItems.Provider
      value={
        {
          todoItems,
          addNewItem,
          deleteItem
        }
      }>
      {children}
    </ContextTodoItems.Provider>
  )
}

export default ContextTodoItemsProvider

