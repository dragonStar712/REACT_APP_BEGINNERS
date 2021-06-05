import React from 'react'

const Todo = ({todo,text,filteredTodoList,setTodoList}) => {

    // console.log(todo);
    const deleteHandler = () => {
        setTodoList(filteredTodoList.filter((ele) => ele.id !== todo.id));
    }
    
    const completeHandler = () => {
        setTodoList(filteredTodoList.map((ele) =>{
            if(ele.id === todo.id){
                return{...ele, completed: !ele.completed}
            }
            return ele;
        }
        )
        )
        }

    return (
        <div className="todo">
        {/* {console.log(text)} */}
            <li className= {`todo-item ${todo.completed? "completed":""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
                </button>            
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
                </button>            
        </div>
    )
}

export default Todo;
