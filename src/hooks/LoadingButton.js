import React, {useState, useEffect} from 'react'

function LoadingButton({callBack}) {
    const [loading, setLoading] = useState(false)

    const handleLoadingClick = () => setLoading(true)

    useEffect(() => {
        if (loading) {
            callBack().then(() => {
                setLoading(false)
                console.log("end of then!")
            })
        }
    }, [loading,callBack])

    return (
        <div>
            <button style={{width: "150px", height: "35px"}}
                    onClick={() => !loading ? handleLoadingClick() : null}>{!loading ? "click" : "loading..."}</button>
        </div>
    )
}

export default LoadingButton