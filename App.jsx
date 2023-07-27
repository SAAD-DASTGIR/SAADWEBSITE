import './App.css'
import React from 'react'
import Header from '../Components/Header'
import Services from '../Components/Services'
import Introduction from '../Components/Introduction'
import About from '../Components/About'
import Mywork from '../Components/Mywork'
import Footer from '../Components/Footer'

export default function App() {
  
  const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
  return (
    <div>
      <div className={darkMode? "dark" : ""}>

        <div className='body'> 
        <Header toggleDarkMode={toggleDarkMode}darkMode={darkMode}/>
        <Introduction darkMode={darkMode}/>
        <Services darkMode={darkMode}/>
        <About darkMode={darkMode}/>
        <Mywork darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
        </div>
      </div>
    </div>
  )
}


