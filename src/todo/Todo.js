import todosData from "./todosData";
import TodoItem from "./TodoItem";
import React, {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
        this.printTodos = this.printTodos.bind(this)
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    // }

    handleChange(id) {
        console.log("change CHB: ", id)

        this.setState(prevState => {

           // for (let i = 0; i < prevState.todos.length; i++) {
           //      const todo = prevState.todos[i]
           //      if(todo.id === id){
           //          prevState.todos[i] = {
           //              ...todo,
           //              completed: !todo.completed
           //          }
           //      }
           //  }
           //  const updatedTodos = prevState.todos


            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    // todo.completed = !todo.completed
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {todos : updatedTodos}

            // const todo = prevState.todos.find(todo => todo.id === id)
            // const newTodo = {
            //     ...todo,
            //     completed: !todo.completed
            // }

        })
        console.log("change2 CHB: ", id)
    }

    printTodos() {
        this.state.todos.forEach(todo => console.log("todo object: ", todo))
    }

    render() {
        this.printTodos()
        const todoItems = this.state.todos.map(item =>
            <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App
