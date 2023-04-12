import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState,useContext } from 'react';
import TodosContext from '../context/todos';
function TodoEdit({todo,onSubmit}){
 const[title,setTitle]=useState(todo.title);
 const{deleteTodoById}=useContext(TodosContext);
 const handleDeleteClick=()=>{
   deleteTodoById(todo.id);
 };
 const handleChange=(event)=>{
    setTitle(event.target.value);
 };
 const handleFormSubmit=(event)=>{
    event.preventDefault();
    onSubmit(todo.id,title);
    
 }

return (
    <form onSubmit={handleFormSubmit}>
    <li> <input className='edit-input'  value={title} onChange={handleChange}/> <span>
    <IconButton onClick={handleDeleteClick} aria-label="delete">
    <DeleteIcon />
   </IconButton>
    </span>          
   </li>
   </form>
    
)}
export default TodoEdit;