import TodoItem from "./TodoItem";
import style from './TodoList.module.css'

const TodoList = ({ todoList }) => {
  return (
    <div className={style['items-container']}>
      {todoList.map((item, id) => (
        <TodoItem
          key={id}
          item = {item}
        />
      ))}
    </div>
  );
};

export default TodoList;
