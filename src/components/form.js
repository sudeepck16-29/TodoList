import React from "react";

const Form = ({ todos, inputText, setTodos, setInputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
        console.log(inputText)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value)
    }
    return (
        <form>
            {/* value because to keep the changes to the ui  */}
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} class="todo-button" type="submit"><i className="fas fa-plus-square"></i></button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">UnCompleted</option>
                </select>
            </div>
        </form>
    );
}
export default Form;