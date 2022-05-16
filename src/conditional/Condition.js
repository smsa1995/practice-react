import React, {Component} from 'react'
import Conditional from "./Conditional";
import OurLoading from "./OurLoading";

class Condition extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: false,
            unreadMessages: ["asdasd", "asdasd"],
            fetchData: {}
        }
    }


    componentDidMount() {
        const names = {}
        names.push("")
        console.log("type of names: ", typeof names)

        this.setState({isLoading: true})
        const startTime = Date()
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {

                this.setState({
                    isLoading: false,
                    fetchData: data
                })
            })

        const endTime = Date()
        let elapsedTime = (startTime / endTime)
        elapsedTime /= elapsedTime
        console.log("elapsedTime: ", elapsedTime)
        // setTimeout(() => {
        //     this.setState({isLoading: false})
        // }, 2000)


    }

    render() {
        const handleUnreadMsg = this.state.unreadMessages.length > 0 ?
            <h2>u have {this.state.unreadMessages.length} unread messages!</h2> :
            <h1>u have no unread message</h1>

        const handleOnlyCondition = this.state.isLoading ? <OurLoading/> : "no loading, data present!"

        return (
            <div>
                <header>header</header>
                {/*{this.state.isLoading ? <h1>asd</h1> : <Conditional/>}*/}
                {/*<Conditional isLoading={this.state.isLoading}/>*/}
                {handleOnlyCondition}
                {handleUnreadMsg}
                <h2>this is fetched name: {this.state.fetchData.name}</h2>
                <footer>footer</footer>
            </div>
        )
    }
}

export default Condition