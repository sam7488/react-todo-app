import AddToDo from "./AddTodo"
import TodoList from "./TodoList"
import style from './Container.module.css'
import { useState } from "react"
import EmptyMsg from "./EmptyMsg"
import { ContextTodoItems } from "../../store/todo-items-store"

const Container = () => {
  let [todoItems, setTodo] = useState([]);

  const addNewItem = (a, b, uuid) => {
    setTodo((prev) => [...prev, {'name' : a, 'dueDate' : b, 'id' : uuid}]);
  }

  const deleteItem = (id) => {
    let newList = todoItems.filter(item => item.id !== id);
    setTodo(newList);
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
    <div className={style.container}>
      <AddToDo />
      <EmptyMsg />
      <TodoList />
    </div>
    </ContextTodoItems.Provider>
  )
}

export default Container