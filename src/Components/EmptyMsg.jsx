import { useContext } from "react";
import { ContextTodoItems } from "../../store/todo-items-store";

function EmptyMsg() {
  const {todoItems} = useContext(ContextTodoItems);
  
  return (
    todoItems.length === 0 &&
    <p style={{color:"red", marginTop:"10px", fontSize:"20px"}}>Your todo list is empty.</p>
  )
}

export default EmptyMsg;