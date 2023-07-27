import React  from "react";
export default function Footer(props){
    return(
        <div className={props.darkMode ? "dark" : ""}>
            <div className="footer-whole-content" >

            <a className="footer-link"
            href="mailto:saaddastgir@gmail.com">msaaddastgir@gmail.com</a>
            <ul className="list">
                <li className="list-item">
                    <a href="https://github.com/SAAD-DASTGIR">
                    <img src="public\GitHub Icon.png" /></a></li>
                <li className="list-item" >
                    <a href="https://hashnode.com/@Saaddastgir">
                    <img src="public\svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZD0iTTEyLjc3IDMuODk3IDcuNTg3IDkuMDc.svg" /></a></li>
                <li className="list-item">
                    <a href="https://www.facebook.com/saad.dastgir.3?mibextid=ZbWKwL">
                    <img src="public\Facebook Icon.png" /></a></li>
                <li className="list-item">
                    <a href="https://www.linkedin.com/in/saad-dastgir-8357b51b2/?originalSubdomain=pk">
                    <img 
                    className="linkedin-img"
                    src="public\linkedin (1).svg"/></a></li>
            </ul>
            </div>

        </div>
    )
}