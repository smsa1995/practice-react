import React from 'react'

function Conditional(props) {
    return (
        <div>
            {props.isLoading ? <h3>Loading...</h3> : <h3>This topic is about conditional rendering!</h3>}
        </div>
    )
    // if (props.isLoading) {
    //     return (
    //         <div>
    //             <h3>Loading...</h3>
    //         </div>
    //     )
    //
    // } else {
    //     return (
    //         <div>
    //             <h3>This topic is about conditional rendering!</h3>
    //         </div>
    //     )
    // }

}

export default Conditional