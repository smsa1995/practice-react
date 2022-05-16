import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import App from "../App";
import randomcolor from 'randomcolor'

//use useEffect instead of these
// componentDidMount
// componentDidUpdate
// componentWillUnmount

function TestComponent() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    useEffect(() => {
        setColor(randomcolor)
    }, [])

    useEffect(() => {
        setColor(randomcolor)
    }, [count])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor(randomcolor)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [count])

    return (
        <div>
            <h2 style={{color: color}}>{count}</h2>
            <button onClick={() => setCount(prevState => prevState + 1)}>increase</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>decrease</button>
        </div>
    )
}

export default TestComponent

