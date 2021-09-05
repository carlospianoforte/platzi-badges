import React from "react"
import "./styles/Badges.css"
import confLogo from "../images/arbol.png"
import BadgesList from "../components/BadgesList"
import { Link } from "react-router-dom"
import api from "../api"

class Badges extends React.Component{
   
        state={
            loading: true,
            error: null,
            data:  undefined,
               
        }

        componentDidMount(){
            this.fetchData()
        }

        fetchData=async ()=>{
            this.setState({loading: true, error: null})

            try{
                const data = await api.badges.list();
                this.setState({loading: false, data: data})
            }catch(error){
                this.setState({loading: false, error: error})

            }
        }

    
 

    render(){

        if(this.state.loading===true){
            return "Loading..."
        }

        if(this.state.error){
            return `Error: ${this.state.error.message}`
        }
       
        

        return(
        <React.Fragment>

            <div className="Badges">
                <div className="Badges_hero">
                    <div className="Badges_container">
                        <img className="Badges_conf-logo" id="Badge_logo" src={confLogo} alt="Conf Logo" />
                    </div>
                </div>
            </div>

            <div className="Badge_container">
                <div className="Badges_buttons">
                    <Link to="/badges/new" className="btn btn-primary">
                        New Badge
                    </Link>
                </div>

                <div className="Badges_list">
                    <div className="Badges_container">
                        <BadgesList badges={this.state.data} />
                       
                    </div>
                </div>


            </div>

        </React.Fragment>
        )
    }
}




export default Badges