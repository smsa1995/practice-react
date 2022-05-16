import React, {useState, useEffect} from 'react'
import randomColor from 'randomcolor'
import todosData from "../todo/todosData";
import TodoItem from "../todo/TodoItem";

// function App() {
//
//     const [ answer, func ] = useState("yes")
//
//     return (
//         <div>
//             <h1>answer is: {answer}</h1>
//             <h1>answer is: {func}</h1>
//         </div>
//     )
// }

// export default App


// function HookCounter() {
//
//     const [counter, setCounter] = useState(0)
//     const [answer, setAnswer] = useState("Yes")
//     const [color, setColor] = useState("")
//
//     function increment() {
//         setCounter(prevCounter => prevCounter + 1)
//     }
//
//     function decrement() {
//         setCounter(prevCounter => prevCounter - 1)
//     }
//
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCounter(prevCounter => prevCounter + 1)
//         }, 1000)
//         return () => {
//             clearInterval(intervalId)
//         }
//     }, [])
//
//     // setColor for very first time!
//     useEffect(() => {
//         // setColor(randomColor())
//         console.log("very first time!")
//     }, [])
//
//     useEffect(() => {
//         if(counter % 2 === 0) {
//             setColor(randomColor())
//         }
//
//     }, [counter])
//
//     return (
//         <div>
//             <h1 style={{color:color}}>{counter}</h1>
//             <button onClick={increment}>Increase</button>
//             <button onClick={decrement}>decrease</button>
//         </div>
//     )
// }
//
// export default HookCounter



function NewTodoItem(props) {
    const completedTaskStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type="checkbox"
                   checked={props.item.is_completed}
                   onChange={() => props.handleOnChange(props.item.id)}
            />
            <h3 style={props.item.is_completed ? completedTaskStyle : null}>{props.item.text}</h3>
        </div>
    )
}

function NewToDo() {
    const [todoList, setTodoList] = useState(todosData)

    function handleOnChange(id) {
        const newTodoList = todoList.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    is_completed: !todo.is_completed
                }
            }
            return todo
        })
        for(const item in newTodoList) {
            console.log(item)
        }
        setTodoList(newTodoList)
    }

    const todos = todoList.map(todoItem =>
        <NewTodoItem key={todoItem.id}
                     item={todoItem}
                     handleOnChange={handleOnChange}/>)

    return (
        <div className="todo-list">
            {todos}
        </div>
    )
}

export default NewToDo


