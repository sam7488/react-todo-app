import { useState } from 'react';
import style from './AddTodo.module.css'
import {v4 as uuidv4} from 'uuid'

function AddToDo({addNewItem}) {
  const today = new Date().toISOString().split("T")[0];
  let [name, setName] = useState('');
  let [dueDate, setDueDate] = useState(today);
  // let [error, setError] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDateChange(event) {
    setDueDate(event.target.value)
  }

  const handleAddButtonClicked = () => {
    if(!name.trim()) {
      // setError('Please fill the todo name');
      return;
    }
    addNewItem(name, dueDate, uuidv4());
    setName('');
    setDueDate(today);
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
        value={name}
        onChange={(event) => handleNameChange(event)}
        onKeyDown={handleKeyDown}
        />
      </div>
      <div className="col-3">
        <input 
          type="date" 
          name="todo-date"
          min={today}
          value={dueDate}
          onChange={(event) => handleDateChange(event)}
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