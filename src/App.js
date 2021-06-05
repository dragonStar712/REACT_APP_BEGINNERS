import React, {useState,useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  const [inputText,setInputText] = useState("");
  const [todoList,setTodoList] = useState([]);
  const [status,setStatus] = useState("ALL");
  const [filteredTodoList,setFilteredTodoList] = useState([]);
  

  useEffect(
    ()=>{getTodoList()
    }
    ,[]);

  useEffect(()=> {saveTodoList();
    filterhandler()
  } ,[todoList,status]
    );

    const filterhandler= ()=>{
      switch(status){
       case "COMPLETED":{
           setFilteredTodoList(todoList.filter((ele)=>ele.completed===true));
           break;
       }
        case "UNCOMPLETED":{
            setFilteredTodoList(todoList.filter((ele)=>ele.completed===false));
            break;
        }
        default: {
            setFilteredTodoList(todoList)
            break;
        }
        }
    }

    const saveTodoList = () => {
      localStorage.setItem("todos",JSON.stringify(todoList));
  
    }
    const getTodoList = () => {
      if(localStorage.getItem("todos")===null){
        localStorage.setItem("todos",JSON.stringify([]));
      }
      else{
        let localtodos = JSON.parse(localStorage.getItem("todos"));
        setTodoList(localtodos);
        console.log(localtodos);
      }
    }

  return ( 
    <div className="App">
    {console.log(todoList)}
        
    {console.log(filteredTodoList)}
    <header>
        <h1>
          Maulik's TodoList
        </h1>
        </header>
      <Form inputText={inputText} setInputText={setInputText} todoList={todoList} setTodoList={setTodoList} setStatus={setStatus} />
      <TodoList todoList={todoList}  setTodoList={setTodoList} filteredTodoList={filteredTodoList} />      
    </div>
  )
}

export default App;

// https://www.youtube.com/watch?v=pCA4qpQDZD8
