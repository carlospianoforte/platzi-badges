import React from "react";
import "./styles/Badge.css"
import confLogo from "../images/arbol.png"

class Badge extends React.Component{
    render(){


        return (
            <div className="Badge">
                <div className="Badge_header">
                    <img className="Badge_logo" src={confLogo} alt="logo"/>
                </div>

                <div className="Badge_section-name">
                    <img className="Badge_avatar" src={this.props.avatarUrl} alt="avatar"/>

                    <h1>
                        {this.props.firstName} <br/> 
                        {this.props.lastName}
                    </h1>
                </div>

                <div className="Badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge_footer">
                    #DOG
                </div>

            </div>
        )
    }

}

export default Badge;