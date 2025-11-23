import AddToDo from "./AddTodo"
import TodoList from "./TodoList"
import style from './Container.module.css'
import { useState } from "react"
import EmptyMsg from "./EmptyMsg"

const Container = () => {
  let [todoList, setTodo] = useState([]);

  const addNewItem = (a, b, uuid) => {
    let list = [...todoList, {'name' : a, 'dueDate' : b, 'id' : uuid}]
    setTodo(list);
  }

  const deleteItem = (id) => {
    let newList = todoList.filter(item => item.id !== id);
    setTodo(newList);
  }

  return <div className={style.container}>
    <AddToDo addNewItem={addNewItem}/>
    {
    todoList.length === 0 ? 
    <EmptyMsg /> :
    <TodoList todoList={todoList} handleDeleteButton={deleteItem}/>
    }
  </div>
}

export default Container