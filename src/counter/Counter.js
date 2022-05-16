import {React, Component} from 'react'
import randomColor from 'randomcolor'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            color: "",
            fontSize: 10
        }
        this.handleIncreaseClick = this.handleIncreaseClick.bind(this)
        this.handleDecreaseClick = this.handleDecreaseClick.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this)
    }

    handleOnMouseLeave() {
        // alert("this is handleOnMouseLeave!")
    }

    handleIncreaseClick() {
        // this.setState()
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
                fontSize: prevState.fontSize + 1
            }
        })
    }

    handleDecreaseClick() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1,
                fontSize: prevState.fontSize - 1
            }
        })
    }

    handleResetClick() {
        this.setState(() => {
            return {count: 0, fontSize: 10}
        })
    }

    componentDidMount() {
        console.log("mount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("update")
        if (prevState.count !== this.state.count) {
            const newColor = randomColor()
            this.setState({color: newColor})
        }
    }

    render() {
        console.log("render")
        return (
            <div className="todo">
                <h4 style={{fontSize: this.state.fontSize, color: this.state.color}}> {this.state.count}</h4>
                <button onClick={this.handleIncreaseClick}>increase</button>
                <button onClick={this.handleDecreaseClick}>decrease</button>
                <button onClick={this.handleResetClick} onMouseLeave={this.handleOnMouseLeave}>reset</button>
            </div>
        )
    }

}

export default Counter