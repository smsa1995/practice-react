import React, {Component} from 'react'

class MainMemeGenerator extends Component {

    constructor() {
        super();
        this.state = {
            headerText: "",
            footerText: "",
            randomImg: "https://i.imgflip.com/9ehk.jpg",
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    /**
     * can use this format instead of above
     * state = {
     *     ...
     * }
     */

    //doesn't work
    // async componentDidMount() {
    //     const response = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await response.json()
    //     const {memes} = data
    //     this.setState({allMemeImgs: memes})
    // }



    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        console.log("in handle submit!")
        event.preventDefault()
        const rand = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randImgUrl = this.state.allMemeImgs[rand].url
        this.setState({randomImg: randImgUrl})
    }

    handleClick = () => {
        console.log("in handle click!")
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="headerText"
                        placeholder="Header Text"
                        value={this.state.headerText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="footerText"
                        placeholder="Footer Text"
                        value={this.state.footerText}
                        onChange={this.handleChange}
                    />

                    <button>Gen</button>
                    <button onClick={this.handleClick}>Gen2</button>

                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="no pic!!!" style={{width: 800, height: 300}}/>
                    <h2 className="top">{this.state.headerText}</h2>
                    <h2 className="bottom">{this.state.footerText}</h2>
                </div>
            </div>
        )
    }


}

export default MainMemeGenerator


/**
 * Other modern/advanced React features/topics to learn:
 *
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */
