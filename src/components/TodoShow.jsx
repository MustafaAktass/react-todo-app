import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import { useState,useContext, useEffect } from 'react';
import TodosContext from '../context/todos';
import TodoEdit from './TodoEdit';

function TodoShow({todo}){
  
    const[editView,setEditView]=useState(false);
    const [completeLine, setCompleteLine] = useState(
      JSON.parse(localStorage.getItem(`completeLine-${todo.id}`))
    );
    const{deleteTodoById,editTodoById,toggleCompleteLine} =useContext(TodosContext);
    const handleDeleteClick=()=>{
        deleteTodoById(todo.id);
    };
    const handleEditClick=()=>{
        setEditView(!editView);
    }  
  
  const handleCompleteLine = () => {
    const newComplete = !todo.completeLine;
    toggleCompleteLine(todo.id);
    setCompleteLine(newComplete); 
    localStorage.setItem(`completeLine-${todo.id}`, JSON.stringify(newComplete));
};
  
    const handleSubmit=(id,newTitle)=>{
       setEditView(false);
       editTodoById(id,newTitle,todo.completeLine);
    }
   
    let todoElement=<div>
    <div className="todo-item" onClick={handleCompleteLine}>
      {completeLine ? <h2 className='line'>{todo.title}</h2>:<h2>{todo.title}</h2>}
      <div>
        <span>
          <IconButton onClick={(event) => {
              event.stopPropagation();
              handleDeleteClick();
            }} 
            aria-label="delete">
            <AiFillDelete/>
          </IconButton>
          <IconButton onClick={(event) => {
              event.stopPropagation();
              handleEditClick();
            }}
            aria-label="edit">
            <AiFillEdit/>
          </IconButton>
        </span>
      </div>
    </div>
  </div>
   
    if(editView){
        todoElement=<TodoEdit  todo={todo} onSubmit={handleSubmit} 
       />    
    }
    
    return (
        <div className="list">
            <ul>
              {todoElement}            
            </ul>
        </div>
    )
}
export default TodoShow;