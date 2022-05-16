    import React, {useState} from 'react'
import './TodoApp.css'
import fetchedTasks from '../../todo/todosData'
import NewTODOItem from "../../todo/NewTODO";

function TodoForm({addTodo}) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}


function Todo({todo, index, completeTodo, removeTodo, testCB}) {
    const completedTaskStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    testCB()
    return (
        <div className="todo"> `
            <h3 style={todo.isCompleted ? completedTaskStyle : null}>{todo.text}</h3>

            <button onClick={() => completeTodo(index)}>{todo.isCompleted ? "uncomplete" : "complete"}</button>
            <button onClick={() => removeTodo(index)}>remove</button>

            {/*<input type="checkbox" onClick=/>*/}

        </div>
    )
}


function HookTodoApp() {

    const [todos, setTodos] = useState([
        {
            text: "this is text 1",
            isCompleted: false
        },
        {
            text: "this is text 2",
            isCompleted: false
        },
        {
            text: "this is text 3",
            isCompleted: false
        },
        {
            text: "this is text 4",
            isCompleted: false
        },
        {
            text: "this is text 5",
            isCompleted: false
        },
        {
            text: "this is text 6",
            isCompleted: false
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos]
        const item = newTodos[index]
        item.isCompleted = !item.isCompleted
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const testCB = () => {
        console.log("this is testDB")
    }

    const todosMapped = todos.map((todo, index) => (
        <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            testCB={test}
        />
    ))

    return (
        <div className="app">
            <div className="todo-list2">
                {todosMapped}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default HookTodoApp