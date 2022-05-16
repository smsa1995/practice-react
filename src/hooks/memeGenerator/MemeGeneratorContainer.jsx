import React, { useState, useEffect } from 'react';
import MemeGeneratorComponent from './MemeGeneratorComponent';
import LoadingComponent from './LoadingComponent';

function MemeGeneratorContainer() {

    const [headerText, setHeaderText] = useState("");
    const [footerText, setFooterText] = useState("");
    const [randImgUrl, setRandImgUrl] = useState("https://i.imgflip.com/9ehk.jpg");
    const [imgsUrl, setImgsUrl] = useState([]);

    //make use of loading better 
    // use loading when each pic is gonna be laoded in browser (<img src...)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("comp did mount");
        // fetch("https3://api.imgflip.com/get_memes") //wrong url!
        // show proper msg if there is error in fetch!
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                setImgsUrl(memes);
                console.log("this is memes: ", memes);
                // alert("this is alert!")
                console.log("before make false true");
                setLoading(false)
            })
            .catch(error => {
                console.log("this is error: ", error);
            })

    }, [])

    // useEffect(() => {
    //     if (loading) {
    //         setLoading(false)
    //     }

    // }, [loading])


    const handleOnChange = (event) => {
        console.log("in handleOnChange!");
        const { value, name } = event.target
        if (name === "headerText") {
            console.log("in footerText handleOnChange!");
            setHeaderText(value)
            return
        }

        if (name === "footerText") {
            setFooterText(value)
            return
        }
    }

    useEffect(() => {
        console.log("header footer before update")
        if (headerText.includes("smsa")) {
            setFooterText(headerText)
            return
        }
        console.log("header footer after update")

    }, [headerText, footerText])


    const handleOnSubmit = (event) => {
        console.log("in handle submit!")
        event.preventDefault()
        const rand = Math.floor(Math.random() * imgsUrl.length)
        setRandImgUrl(imgsUrl[rand].url)
    }

    return (
        <div>
            {
                loading ?   
                    <LoadingComponent />
                    :
                    <MemeGeneratorComponent
                        headerText={headerText}
                        footerText={footerText}
                        randImgUrl={randImgUrl}
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}

                    />
            }

        </div>
    )

}

export default MemeGeneratorContainer;
