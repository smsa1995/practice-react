import React, {Component} from "react";

class TestForm extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
    }

    handleOnChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleOnKeyDown() {
        alert("key down!")
        console.log("key ")
    }

    render() {
        return (
            <form>
                <input type="text"
                       placeholder="first name"
                       name="firstName"
                       // concept of controlled forms
                      // the idea is that we want to form fields perfectly match with our state
                       value={this.state.firstName}
                       onChange={this.handleOnChange}
                       onKeyDown={this.handleOnKeyDown}
                />
                <br/>
                <input type="text"
                       placeholder="last name"
                       name="lastName"
                       value={this.state.lastName}
                       onChange={this.handleOnChange}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }

}

export default TestForm