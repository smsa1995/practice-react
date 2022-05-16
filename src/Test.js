import React from "react"


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            isUserLoggedIn: true
        }
        this.handleLoggInClick = this.handleLoggInClick.bind(this)
    }

    handleLoggInClick() {
        this.setState(prevState => {
            return {isUserLoggedIn: !prevState.isUserLoggedIn}
        })
    }

    render() {
        return (
            <div>
                <h1>user is {this.state.isUserLoggedIn ? "logged in" : "logged out"}</h1>
                <button onClick={this.handleLoggInClick}>{this.isUserLoggedIn ? "logout" : "login"}</button>
            </div>
        )
    }

}

export default App
