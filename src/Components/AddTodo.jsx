import { useContext, useRef } from 'react';
import style from '../css/AddTodo.module.css'
import {v4 as uuidv4} from 'uuid'
import { ContextTodoItems } from '../store/todo-items-store';

function AddToDo() {
  const today = new Date().toISOString().split("T")[0];
  let todoNameEle = useRef('');
  let todoDueDateEle = useRef(today);
  const {addNewItem} = useContext(ContextTodoItems);

  const handleAddButtonClicked = () => {
    const todoName = todoNameEle.current.value;
    const todoDueDate = todoDueDateEle.current.value;
    if(!todoName.trim() || !todoDueDate) {
      return;
    }
    addNewItem(todoName, todoDueDate, uuidv4());
    todoNameEle.current.value = '';
    todoDueDateEle.current.value = today;
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') handleAddButtonClicked();
  }

  return (
    <div className={`${style['add-item']} row`}>
      <div className="col-5">
        <input 
        type="text" 
        placeholder="Enter todo-list"
        ref={todoNameEle}
        onKeyDown={handleKeyDown}
        />
      </div>
      <div className="col-3">
        <input 
          type="date" 
          name="todo-date"
          min={today}
          ref={todoDueDateEle}
          defaultValue={today}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="col-2">
        <button 
        type="button" 
        className="btn btn-success"
        onClick={() => handleAddButtonClicked()}
        >
          Add
        </button>
      </div>

      {/* {error && <div>{error}</div>} */}
    </div>
  )
}

export default AddToDo