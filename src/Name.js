import React from "react"
import Typist from "react-typist"
import 'react-typist/dist/Typist.css'
 
function Name() {
  return (
    <div className="name">
        <Typist startDelay={1500} 
                cursor={{show:false}}
                avgTypingDelay={85}
                stdTypingDelay={20}
                onTypingDone={
                    setTimeout(function () {
                        var v = document.getElementById("navbar");
                        v.className = "nav";
                        v = document.getElementById("right-body");
                        v.className = "right-body";
                    }, 3000)
                }
        >
            <h1>arpi</h1>
            <h1>beshlikyan</h1>
        </Typist>
    </div>
  )
}
 
export default Name;