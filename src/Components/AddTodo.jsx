import style from './AddTodo.module.css'
function AddToDo() {
  return <div className="">
    <div className="row">
      <div className="col-5">
        <input type="text" placeholder="Enter todo-list"/>
        </div>
      <div className="col-3">
        <input type="date" name="todo-date"  />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  </div>
}

export default AddToDo