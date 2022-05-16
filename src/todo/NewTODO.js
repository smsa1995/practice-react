import React, {Component} from 'react'
import fetchedTasks from './todosData'

class NewTODO extends Component {

    constructor() {
        super()
        this.state = {
            tasks: fetchedTasks
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(id) {
        const updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task
        })
        this.setState({tasks: updatedTasks})
    }

    render() {
        const mappedTasks = this.state.tasks.map(task => <NewTODOItem key={task.id} task={task}
                                                                      handleOnChange={this.handleOnChange}/>)
        return (
            <div className="todo-list">
                {mappedTasks}
            </div>
        )
    }
}


function NewTODOItem(props) {
    let names = []
    console.log(typeof names)
    const completedTaskStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type="checkbox"
                   checked={props.task.completed}
                   onChange={() => props.handleOnChange(props.task.id)}
            />
            <h2 style={props.task.completed ? completedTaskStyle : null}>
                {props.task.text}
            </h2>
        </div>
    )

}

export default NewTODOItem