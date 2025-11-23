import TodoItem from "./TodoItem";
import style from './TodoList.module.css'

const TodoList = ({ todoList, handleDeleteButton }) => {
  return (
    <div className={style['items-container']}>
      {todoList.map((item, id) => (
        <TodoItem
          key={id}
          item = {item}
          handleDeleteButton={handleDeleteButton}
        />
      ))}
    </div>
  );
};

export default TodoList;
