import React from "react";
export default function Mywork(props){
    return(
        <div className={props.darkMode ? "dark" : ""}>
            <div className="mywork-title" >
            <h2 className="mywork-heading">My Work</h2>
            <p className="mywork-subtitle">A selection of range of my work</p>
            <div className="portfolio">
                <a href="https://animated-login-form-eight.vercel.app/" className="link">
                    <img src="public\login new.PNG"
                    className="work-image1"
                    alt="" />
                </a>
                <a href="https://6484612da16db5526fb05623--relaxed-churros-aa197e.netlify.app/"
                className="link">
                    <img src="public\card new.PNG" 
                    className="work-image2"
                    alt="" />
                </a>
            </div>
            </div>
        </div>
    )
}