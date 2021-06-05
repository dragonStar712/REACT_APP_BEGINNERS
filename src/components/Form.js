import React from 'react'

const Form =(props)=> {

    const inputTextHandler = (event) => {
        props.setInputText(event.target.value);
    
    }
    const setTodoListHandler = (event) => {
            event.preventDefault();
            props.setTodoList([
                ...props.todoList,{ text : props.inputText, completed: false, id: Math.random() *1000}
            ])
            props.setInputText('');
    }

    const statusHandler=(e) =>{
        props.setStatus(e.target.value);
    }

    return (
        <form>
            <input onChange={inputTextHandler} className="todo-input" type="text" value={props.inputText} placeholder="enter to-do work" />
            <button onClick={setTodoListHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
                </button>
            <div className="select">
                <select onChange={statusHandler} name="todo" className="filter-todo">
                <option value="ALL">ALL</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="UNCOMPLETED">UNCOMPLETED</option>
                </select>          
            </div> 
        </form> 
    )
}

export default Form
