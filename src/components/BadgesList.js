import React from "react"
import "./styles/BadgesList.css"

class BadgesList extends React.Component{
    render(){
        return (
            <ul className="list-unstyled">
            {this.props.badges.map((badge)=>{
                return(
                    <li key={badge.id} className="BadgesList_section-name">

                            <img className="BadgesList_avatar" src={badge.avatarUrl} alt="avatar"/>
                                <ul>

                                            {badge.firstName}
                                            {badge.lastName}
                                            <br/>
                                            {badge.twitter}
                                            <br/>
                                            {badge.jobTitle}

                                </ul>
                                            
                                        
                            

                       

                   
                    </li>
                )

            })}
        </ul>
        )
    }
}


export default BadgesList