import React from 'react'
import "../index.css"

let progressCount = 20
const ProgressBar = () => {
    return(
    <div>
        <div className="progressbar">
        </div>
        <div className="triangle3" style={{
            width: "0px", height: "0px", "margin-left": `${progressCount}%`, "border-style": "solid", "border-color": "transparent transparent #99e6ff transparent",
            "border-width": "0px 20px 20px 20px"
        }}>
        </div>
    </div>
    )
}

export default ProgressBar;