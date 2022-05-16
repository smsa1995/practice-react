import TodoItem from "./todo/TodoItem"
import todosData from "./todo/todosData"
import './todo/style.css'
import React, {Component} from 'react'

function App() {
    const is = false
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    let name


    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}

export default App

