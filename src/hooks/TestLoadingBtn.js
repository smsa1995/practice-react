import React, {useState, useEffect} from 'react'
import LoadingButton from "./LoadingButton";

const returnPromise = () => new Promise((resolve) => setTimeout(resolve, 1))

function componentDidMount() {
    console.log("before request")
    setTimeout(() => {
    }, 2000)
    const userReq = "https://reqres.in/api/users?page=2"
    const delayReq = "https://reqres.in/api/users?delay=3"
    fetch(delayReq)
        .then(response => response.json())
        .then(response => {
            console.log("after request")
            console.log("data: " + JSON.stringify(response.data))
            // return new Promise(resolve => {})
            return returnPromise()

        })
}

//
// function TestLoadingBtn() {
//
//     // componentDidMount()
//
//     function simulateNetworkRequest() {
//         return new Promise((resolve) => setTimeout(resolve, 1))
//     }
//
//     const takeSsc = () => {
//         setTimeout(() => {
//             console.log("requesting...")
//         }, 3000)
//     }
//
//     const takeSsc2 = (resolve) => {
//         // when define a body for handler of setTimeout, wont work, button goes to 'loading...' state
//         // and never exit!
//         // we have to pass 'resolve to setTimeout and not define function to work this fine!'
//         // if we define handler with empty body ( () => {} ) this either wont work!
//         setTimeout(resolve, 3000)
//     }
//
//
//     function simulateNetworkRequest2() {
//         return new Promise((resolve) => componentDidMount())
//     }
//
//     return (
//         <div className="app">
//             <LoadingButton callBack={componentDidMount}/>
//         </div>
//     )
// }
//
// export default TestLoadingBtn


function Button({isLoading, children, ...props}) {
    return (
        <button {...props}>
            {isLoading ? "loading..." : "children"}
        </button>
    );
}

function handleRequest(isButtonLoading, setIsButtonLoading) {
    if (!isButtonLoading) {
        setIsButtonLoading(true);
        const delayReq = "https://reqres.in/api/users?delay=3"
        fetch(delayReq)
            .then(response => response.json())
            .then(response => {
                console.log("after request")
                console.log("data: " + JSON.stringify(response.data))
                setIsButtonLoading(false);
            })
    }
}

function Example() {
    console.log("in start")

    const [isButtonLoading, setIsButtonLoading] = React.useState(false);
    console.log("before req")
    const delayReq = "https://reqres.in/api/users?delay=3"
    fetch(delayReq)
        .then(response => response.json())
        .then(response => {
            console.log("in return req")
            console.log("data: " + JSON.stringify(response.data))
            setIsButtonLoading(false);
        })

    console.log("after request")
    console.log("after request2")

    return (
        <Button
            onClick={() => {
                handleRequest(isButtonLoading, setIsButtonLoading)
            }}
            isLoading={isButtonLoading}
        >
            Click me
        </Button>
    );

}

export default Example