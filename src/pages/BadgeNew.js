import React from "react"

import Navbar from "../components/Navbar"
import header from "../images/piano.png"
import "./styles/BadgeNew.css"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"

class BadgeNew extends React.Component {
    state={form:{
        firstName:"",
        lastName:"",
        jobTitle:"",
        twitter:"",
    }}

     handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    } 

    render(){
        return(
            <div>
                <Navbar/>
                <div className="Badge_hero">
                    <img className="img-fluid" 
                        id="Badge_logo" 
                        src={header} 
                        alt="Logo"/>
                    
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatarUrl="https://s.gravatar.com/avatar/b39d281d0680f8fa3060f2e537d91dbc?s=80"
                              
                            />
                            </div>

                            <div className="col-6">
                                <BadgeForm onChange={this.handleChange} 
                                formValues={this.state.form} 
                                />
                            </div>


                    </div>

                </div>
            </div>
            

            
        )
    }
}

export default BadgeNew;