import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/arbol.png"
import "./styles/Navbar.css"


class Navbar extends React.Component {
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar_brand" to="/">
                        <img className="Navbar_brand-logo" 
                            id="Badge_logo" 
                            src={logo} 
                            alt="Logo"/>
                        <span className="fw-light">DOG</span>
                        <span className="fw-bold">Back</span>
                    </Link>
                </div>
              
            </div>
        )
    }
}

export default Navbar