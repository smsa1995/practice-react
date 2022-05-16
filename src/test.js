import todosData from "./todo/todosData";
import TodoItem from "./todo/TodoItem";
import React, {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)


        this.componentWillReceiveProps()
    }


    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }

    // componentWillMount() {

    // }

    componentDidMount() {
        // GET the data I need to correctly display
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }


    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }





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
        })

        console.log("change2 CHB: ", id)

    }

    render() {
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
