import style from './TodoItem.module.css'

const TodoItem = ({item}) => {
  return <div className={style.item}>
    <div className="row" >
      <div className="todo-name col-5">{item.name}</div>
      <div className="todo-date col-3">{item.dueDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
}

export default TodoItem;