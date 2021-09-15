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
import Gravatar from './Gravatar';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
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

function useSearchBadges(badges) {

  const [query, setQuery]=React.useState('');

  const[filterBadges, setFilterBadges] = React.useState(badges);

    React.useMemo(()=>{ 
    const result= badges.filter(badge=>{
     return `${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    });
    setFilterBadges(result)
  }, [badges, query]);

  return {query, setQuery, filterBadges};

}

function BadgesList (props){
    const badges=props.badges

    const {query, setQuery, filterBadges} = useSearchBadges(badges)

    

    if(filterBadges.length===0){
      return(
        <div>
          <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control" 
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          />
        </div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      )
    }
    return (
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control" 
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          />
        </div>

        <ul className="list-unstyled">
          {filterBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link 
                  className="text-reset text-decoration-none" 
                  to={`/badges/${badge.id}`}>
                    <BadgesListItem badge={badge} />

                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  
}

export default BadgesList; 