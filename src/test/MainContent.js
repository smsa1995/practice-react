import React from "react";



function MainContent() {
    const date = new Date()

    return (
        <div>
            <main>
                <p>this is main content {date.getHours() + ":" +  date.getMinutes()}</p>

            </main>
        </div>
    )
}

export default MainContent