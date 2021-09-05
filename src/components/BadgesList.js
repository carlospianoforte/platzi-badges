/* import React from "react"
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


export default BadgesList */
 

import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length===0){
      return(
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      )
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList; 