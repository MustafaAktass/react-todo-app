import TodoShow from "./TodoShow";
import TodosContext from "../context/todos";
import { useContext } from "react";
function TodoList(){
    const{todos}=useContext(TodosContext);
    const mappingTodos =todos.map((todo)=>{
        return <TodoShow todo={todo} key={todo.id} />
    });

return (
<div>
   {mappingTodos}
</div>
);
}
export default TodoList;