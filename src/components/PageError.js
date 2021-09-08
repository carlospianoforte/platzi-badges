import React from "react"
import "./styles/PageError.css"
import { Link } from "react-router-dom"


function PageError (props){
    return(
    <React.Fragment>

        <div className="PageError">
            {props.error.message}
        <div>
            <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>

       

        </div>
    </React.Fragment>
    )
    

}

export default PageError