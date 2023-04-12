import { useState,useContext } from "react";
import TodosContext from "../context/todos";

function TodoCreate(){
    const[title,setTitle]=useState('');
    const {createTodo}=useContext(TodosContext);
    const handleChange=(event)=>{
        setTitle(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        createTodo(title);
        setTitle('');
    }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputBox">
                <input type="text" value={title} onChange={handleChange}/>
                <span>Todo</span>
                </div>
            </form>
        </div>
    );
}
export default TodoCreate;