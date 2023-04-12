import { useEffect,useContext} from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

import TodosContext from "./context/todos";
function App(){
    const {getTodos} = useContext(TodosContext);
    useEffect(()=>{
        getTodos();
    },[]);
    return (
    <div>    
        <TodoCreate/>
        <TodoList />
    </div>
    
    );
}
export default App;