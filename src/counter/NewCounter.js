import React, {Component} from 'react'
import randomColor from 'randomcolor'

class NewCounter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            color: "",
            step: 1
        }
        this.handleDecreaseOnClick = this.handleDecreaseOnClick.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleIncreaseOnClick = ()=> {
        console.log("increase")
        console.log("count: " + this.state.count)

        this.setState(prevState => {
            return {
                count: prevState.count + parseInt(this.state.step),
                color: randomColor()
            }
        })
    }

    handleDecreaseOnClick() {
        console.log("increase")

        this.setState(prevState => {
            return {count: prevState.count - parseInt(this.state.step)}
        })

    }

    handleOnChange(event) {
        this.setState(() => {
            const {name, value} = event.target
            // return {...this.state, [name]: value}
            return {[name]: value}
        })
    }

    //
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("in should comp update method!")
        // if()
        return true
    }
    //


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("in  comp did update method!")

    }

    //
    // componentDidMount() {
    //     console.log("in   comp did mount method!")
    //
    // }



    render() {
        return (
            <div>
                <h3 style={{color:this.state.color}}>{this.state.count}</h3>
                <input
                    type="number"
                    placeholder="step"
                    name="step"
                    value={this.state.step}
                    onChange={this.handleOnChange}
                />
                <br/>
                <br/>
                <button
                    onClick={this.handleIncreaseOnClick}
                    value="increase">
                    increase
                </button>
                <button
                    onClick={this.handleDecreaseOnClick}
                    value="decrease">
                    decrease
                </button>
            </div>
        )
    }

}

export default NewCounter