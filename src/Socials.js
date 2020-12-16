import React from "react"

function Socials() {
  return (
    <div className="socials fade" id="socials">
        <div className="social-icon-row">
            <div className="social-icon">
                <a href="https://github.com/aybeshlikyan"><img src={require('./statics/github-icon.png')} alt="Github"/></a>
            </div>
            <div className="social-icon">
                <a href="https://instagram.com/arpibee"><img src={require('./statics/instagram-icon.png')} alt="Instagram"/></a>
            </div>
        </div>
        <div className="social-icon-row">
            <div className="social-icon">
                <a href="https://twitter.com/arpi_bee"><img src={require('./statics/twitter-icon.png')} alt="Twitter"/></a>
            </div>
            <div className="social-icon">
                <a href="https://vsco.co/arpibee"><img src={require('./statics/vsco-icon.png')} alt="VSCO"/></a>
            </div>
        </div>
    </div>
  )
}
 
export default Socials;