import React from "react";
import { TypeAnimation } from 'react-type-animation';
export default function About(props){
    return(
        

        <div className={props.darkMode ? "dark" : ""}>  
            <div className="about-me">
            <h2 className="title-about">
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Who I Am?',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a Front-end Developer',
        1000,
        'I do design and development',
        1000,
        'Pursuing Bachelors degree in Computer Science',
        1000,
        'I love to write Blogs ',
        1000
      ]}
      wrapper="title-about"
      speed={50}
    //   style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
                
                
                </h2>
            <p className={`subtitle-about ${props.darkMode ? "dark" : ""}`}>
                 Visionary Web Developer Shaping User-Friendly Online Realms
            </p>
            
            <div className="about-body">
                <p> 
                As a forward-thinking Web Artisan, I possess an extensive skillset in crafting dynamic and seamless user experiences. My expertise spans HTML, CSS, Bootstrap, JavaScript, React, and Firebase, empowering me to breathe life into captivating websites that leave users in awe.
                <br/><br/>Pursuing a Bachelor's degree in Computer Science from Bahria University Islamabad, I am continually exploring cutting-edge web development practices, always pushing the boundaries of what's possible.
                <br/><br/>  Innovation is my mantra, and I thrive on actively contributing to groundbreaking projects. My ultimate goal is to master the art of creating immersive and intuitive web interfaces that make a lasting impression on anyone who interacts with them.
                </p>
                </div>
            <img src=   "public\Capture.PNG" 
            className="About-image"
            alt="Saad Chilling" />
            </div>
        </div>
    )
}