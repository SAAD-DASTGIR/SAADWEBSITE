import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
export default function Services(props){
    const checkRef = useRef(3); // Create a ref using the useRef hook
    const checkRef1 = useRef(3); // Create a ref using the useRef hook
    const checkRef2 = useRef(3); // Create a ref using the useRef hook

    useEffect(() => {
      // When the component is mounted, get the element with the ref
      const checkElement = checkRef.current;
      const checkElement1 = checkRef1.current;
      const checkElement2 = checkRef2.current;
      // Initialize the annotation using rough-notation
      const annotation = annotate(checkElement, { type: 'box', color: '#16e0bd' });
      // Show the annotation
      const annotation1 = annotate(checkElement1, { type: 'box', color: '#16e0bd' });
      // Show the annotation
      const annotation2 = annotate(checkElement2, { type: 'box', color: '#16e0bd' });
      // Show the annotation
    //   annotation.show();
      annotation1.show();
      annotation2.show();
      annotation.show();
    //   setTimeout(() => {
    //     annotation.hide();
    //     annotation.show();
    //     }, 3000);

    const intervalId = setInterval(() => {
        annotation.hide();
        annotation1.hide();
        annotation2.hide();
        setTimeout(() => {
          annotation.show();
          annotation1.show();
          annotation2.show();
        }, 2000); // Show again after a brief delay (adjust this value if needed)
      }, 2000); // Toggle every 3 seconds
  
      // Cleanup the interval when the component is unmounted
      return () => clearInterval(intervalId);
      // Optionally, you can hide the annotation after a certain delay using setTimeout
      // For example, to hide the annotation after 3 seconds, you can do the following:
    }, []);     
return(
    <div className={props.darkMode ? "dark" : ""}>
        <div className="service-section">

        <h2 className="title-services">
            What I do
        </h2>
        <div className="service">

        <div className="services">
            <h3 className="paragraph">Design</h3>
            <p  className="check" id="check1" ref={checkRef}> 
            
            I carefully craft visual hierarchies within the user interface to guide users' attention and improve usability.
            By maintaining consistency in design elements such as buttons, fonts, and colors, I ensure a cohesive and familiar experience for users throughout the application.
           
            </p>
            </div>
            <div className="services"> 
            <h3 className="paragraph" >Development</h3>
            <p ref={checkRef1}>
            As a front-end JavaScript library, React empowers me to create dynamic and interactive user interfaces.
I build reusable components, manage application state, and optimize performance using React's virtual DOM.
            </p>
            </div>
            <div className="services">
            <h3 className="paragraph" >Blogging</h3>
            <p ref={checkRef2}> 
            Alongside my design and development work, I maintain a blog.
            Through my blog posts, I delve into extending JavaScript libraries, like React, to meet specific project requirements.
I share code examples, explain the challenges faced during the extension process, and discuss the benefits of such customizations
            </p>
            
        </div>
        </div>
        {/* <button>
            <a href="Components\Mywork.jsx" className="btn">My work</a>
        </button> */}
        </div>
    </div>
)

}