import React from "react";
export default function Header(props){
    return(
        <div className={props.darkMode ? "dark": ""}> 
            <div className="toggler" 
            ><p className="toggler--light">Light</p>
                <div className="toggler--slider">
                    <div className="toggler--slider--circle" onClick={props.toggleDarkMode}>
                </div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            
      
             {/* <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button> */}
             {/* <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div> */}

            {/* <div className="nav">
                <ul className="nav-list">
                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#work" className="nav-link">My Work</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contact us</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">My Blogs</a></li>
                </ul>
            </div> */}

            

            </div>

    )
}