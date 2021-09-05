import React from "react"
import { Link } from "react-router-dom"

import pingu2 from "../images/pingu2.jpg"
import "./styles/Home.css"


class Home extends React.Component{
    render(){
        return(
            <>
            <div className="home">
                                


                <div>
                    <h1 className="">START TO LEARN</h1>

                
                    <img className="home_logo" src={pingu2} alt="pingu"/>
                
                </div>
                    
                
                <div className="home_botton">

                    <Link to="/badges" className="btn btn-primary">
                        Start
                    </Link>
                    <p>Learn to program <br></br>
                    
                    with pingui</p>


                </div>
        
    
            </div>
            </>
        )
    }
}


export default Home