import { createContext,useState } from "react";
import axios from "axios";
const TodosContext = createContext();
function Provider({children}){
    
    const[todos,setTodos]=useState([]);
    const [completeLine, setCompleteLine] = useState(false);
    const getTodos=async()=>{
        const response=await axios.get('http://localhost:3001/todos');
        setTodos(response.data);
    }
    const createTodo=async(title)=>{
        const response=await axios.post('http://localhost:3001/todos',{
        title:title,
        completeLine:false
        });
        const updatedTodos=[...todos,response.data];
        setTodos(updatedTodos);  
    };
    const deleteTodoById=async (id)=>{
        const response=await axios.delete('http://localhost:3001/todos/'+id);
        const updatedTodos=todos.filter((todo)=>{
            return todo.id!==id;
        });
        setTodos(updatedTodos);
    }
    const editTodoById= async (id,newTitle,newCompleteLine)=>{
        const response =await axios.put('http://localhost:3001/todos/'+id,{
            title:newTitle,
            completeLine:newCompleteLine
        });
        const updatedTodos=todos.map((todo)=>{
            if(todo.id==id){
                return {...todo,title:newTitle};
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
   
    const toggleCompleteLine = async (id) => {
       
        const updatedTodos = todos.map((todo) => {        
            if (todo.id === id) {
                
                const newComplete = !todo.completeLine;
                const updatedTodo = { ...todo, completeLine: newComplete };
                const response=axios.put(`http://localhost:3001/todos/${id}`, updatedTodo);
                
                return updatedTodo;
            } else {
                return todo;
            }
        });
    
        setTodos(updatedTodos);
    };
    
   
    
   
    const sharedData={
        todos,
        deleteTodoById,
        editTodoById,
        createTodo,
        getTodos,             
        toggleCompleteLine
        
    }

    return (<TodosContext.Provider value={sharedData}>{children}</TodosContext.Provider>);
}
export {Provider}
export default TodosContext;