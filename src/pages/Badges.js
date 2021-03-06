import React from "react"
import "./styles/Badges.css"
import confLogo from "../images/arbol.png"
import BadgesList from "../components/BadgesList"
import { Link } from "react-router-dom"
import api from "../api"
import PageLoading from "../components/PageLoading"
import PageError from "../components/PageError"
import MiniLoader from "../components/MiniLoader"

class Badges extends React.Component{
   
        state={
            loading: true,
            error: null,
            data:  undefined,
               
        }

        componentDidMount(){
            this.fetchData()

            this.intervalId = setInterval(this.fetchData, 5000)//polling para actualizar automaticamente el componente
        }

        componentWillUnmount(){
            clearInterval(this.intervalId)//cancela el intervalo cuando salimos de la pagina
        }

        fetchData=async ()=>{
            this.setState({loading: true, error: null})

            try{
                const data = await api.badges.list();//pide datos a la api y guarda datos
                this.setState({loading: false, data: data})
            }catch(error){
                this.setState({loading: false, error: error})//loading en falso y guarda el error

            }
        }

    
 

    render(){

        if(this.state.loading===true && !this.state.data){//solo hace loading si los datos son indefinidos
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error} />
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
                        {this.state.loading && <MiniLoader/>}
                       
                    </div>
                </div>


            </div>

        </React.Fragment>
        )
    }
}




export default Badges