import AddToDo from "./AddTodo"
import TodoList from "./TodoList"
import style from '../css/Container.module.css'
import { useReducer } from "react"
import EmptyMsg from "./EmptyMsg"
import { ContextTodoItemsProvider } from "../store/todo-items-store"

const Container = () => {
  return (
    <ContextTodoItemsProvider>
      <div className={style.container}>
        <AddToDo />
        <EmptyMsg />
        <TodoList />
      </div>
    </ContextTodoItemsProvider>
  )
}

export default Container