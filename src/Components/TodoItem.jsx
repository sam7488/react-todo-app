import { useContext } from 'react';
import style from '../css/TodoItem.module.css'
import { MdDelete } from "react-icons/md";
import { ContextTodoItems } from '../store/todo-items-store';

const TodoItem = ({item}) => {
  const {deleteItem} = useContext(ContextTodoItems);

  return <div className={style.item}>
    <div className="row">
      <div className="todo-name col-5">{item['name']}</div>
      <div className="todo-date col-3">{item['dueDate']}</div>
      <div className="col-2">
        <button 
        type="button" 
        className="btn btn-danger"
        onClick={() => deleteItem(item.id)}
        >
          {/* Delete */}
          <MdDelete className={style.deleteIcom}/>
        </button>
        

      </div>
    </div>
  </div>
}

export default TodoItem;