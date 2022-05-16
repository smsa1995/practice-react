import React, {useEffect} from 'react'

function TestComponent() {
    useEffect(() => {
        setTimeout(() => {
            console.log("in time out")
        }, 5000)
        return () => {
            console.log("end of component!")
        }
    })

    return (
        <div>
            <h1>this is TestComponent</h1>
        </div>
    )
}

export default TestComponent
