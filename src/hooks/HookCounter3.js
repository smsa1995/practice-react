import React, {useState, useEffect, createContext,} from 'react'
import randomColor from 'randomcolor'
import {logDOM} from "@testing-library/react";
import './test.css'
import TestComponent from "./TestComponent";
import { useCallback } from 'react/cjs/react.production.min';

// let ctx = createContext()

function HookCounter3() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    

    function increase() {
        // setCount(prevState => prevState + 1)
        setCount(count + 1)
        // setColor(randomColor)
    }

    function decrease() {
        setCount(prevState => prevState - 1)
        // setColor(randomColor)
    }

    // no deps, so infinite call
    // useEffect(() => {
    //     console.log("in useEffect without []")
    //     setColor(randomColor)
    // })

    useEffect(() => {
        console.log("in useEffect []")
        setColor(randomColor)
    }, [])


    useEffect(() => {
        console.log("this is log test!")
        
    }, [color, count])
    function callApi() {
        // fetch("http://localhost:8001/api/accounts/login/")
        // fetch("http://localhost:")

        fetch("http://localhost:1337/api/accounts/login/")
            .then(response => response.json())
            .then(response => {
                console.log("data: ", response.data)
            })
    }

    return (
        <div className="todo-list">
            <h3 style={{color: color}}>{count}</h3>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={callApi}>fetch</button>
            <TestComponent/>
        </div>
    )
}

export default HookCounter3

