import { useContext } from "react";
import TodoItem from "./TodoItem";
import style from './TodoList.module.css'
import { ContextTodoItems } from "../../store/todo-items-store";

const TodoList = () => {
  const {todoItems} = useContext(ContextTodoItems);

  return (
    <div className={style['items-container']}>
      {todoItems.map((item, id) => (
        <TodoItem
          key={id}
          item = {item}
        />
      ))}
    </div>
  );
};

export default TodoList;
