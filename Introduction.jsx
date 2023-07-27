import React from "react";
import { TypeAnimation } from 'react-type-animation';



export  default function Introduction(props){
    return(
        <div className={props.darkMode ? "dark" : ""}>
            

            <div className="intro" id="home">
                <h1 className="section-intro">
                    
                    Hi,I am <strong className="strong">Saad Dastgir</strong>
                </h1>
                <p className="section-subtitle">
                    FRONT-END DEVELOPER
                </p>
                <img className="intro-image" src="public\WhatsApp Image 2023-07-22 at 10.30.10 PM (3).jpeg"/>
            </div>
        </div>
        
        )
    
}