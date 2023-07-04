// import React from 'react'
import react_logo from "../assets/react.svg"

const Header = () => {
  return (
    <header>
        <nav>
            
            <ul>
                <img src={react_logo} width={40}/>
                <li>אני מקווה</li>
                <li>שגם אתה</li>
                <li>נגד או בעד</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;