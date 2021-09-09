import React from 'react'

function Navbar() {
    return (
        <div>
             <div className="navigation"> 
              <div  className="nav-home"><img alt="home" className="home" src="./note.png"/></div>
              <div className="nav-trash"><img alt="trash" className="trash" src="./del.png"/></div>
            </div>
        </div>
    )
}

export default Navbar
