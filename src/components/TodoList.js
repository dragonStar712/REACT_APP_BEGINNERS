import React from 'react'
import Todo from './Todo'

const TodoList = ({setTodoList,todoList,filteredTodoList}) => {
    return (
    <div className="todo-container">   
        {/* {console.log(filteredTodoList)} */}
         <ul className="todo-list">
            {filteredTodoList.map((todo) =>(
                <Todo key={filteredTodoList.id} filteredTodoList={filteredTodoList} setTodoList={setTodoList} todo={todo} text={todo.text} />
                ))}
            </ul>
        </div>
    )
}       

export default TodoList
