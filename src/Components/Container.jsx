import AddToDo from "./AddTodo"
import TodoList from "./TodoList"
import style from './Container.module.css'

const Container = () => {
  let todoList = [
    {
      name : "Visit Pashupati",
      dueDate : "15/12/2025",
    },
    {
      name : "Go to theatre to Watch Avatar",
      dueDate : "16/12/2025",
    },
  ];
  
    return <div className={style.container}>
      <AddToDo />
      <TodoList todoList={todoList}/>
      </div>
}

export default Container