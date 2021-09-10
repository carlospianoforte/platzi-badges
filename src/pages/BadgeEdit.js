import React from "react"
import header from "../images/piano.png"
import "./styles/BadgeEdit.css"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import api from "../api"
import PageLoading from "../components/PageLoading"

class BadgeEdit extends React.Component {
    state={
        loading: true,
        error: null,

        form:{
        firstName:"",
        lastName:"",
        jobTitle:"",
        twitter:"",
    }}

    componentDidMount(){
        this.fetchData()
    }

    fetchData=async e=>{
        this.setState({loading:true, error:null})

        try{
            const data =await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState ({loading:false, form:data})
        }catch(error){
            this.setState({loading: false, error: error})

        }
    }

     handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    } 

    handleSubmit=async e=>{
        console.log(e)
        e.preventDefault()
        console.log(e)

        this.setState({loading: true, error: null})

        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading: false})

            this.props.history.push("/badges")

        }catch(error){
            this.setState({loading: false, error: error})
        }
    }

    render(){
        if(this.state.loading){
            return<PageLoading/>
        }
        return(
            <React.Fragment>
                
                <div className="BadgeEdit_hero">
                    <img className="img-fluid" 
                        id="Badge_logo" 
                        src={header} 
                        alt="Logo"/>
                    
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || "FIRST_NAME"}
                                lastName={this.state.form.lastName || "LAST_NAME"}
                                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                                twitter={this.state.form.twitter || "twitter"}
                                email={this.state.form.email || "EMAIL"}
                                avatarUrl="https://s.gravatar.com/avatar/b39d281d0680f8fa3060f2e537d91dbc?s=80"
                              
                            />
                            </div>

                            <div className="col-6">
                                <h1>Edit Attendant</h1>

                                <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit} 
                                formValues={this.state.form}
                                error={this.state.error} 
                                />
                            </div>


                    </div>

                </div>
            </React.Fragment>
            

            
        )
    }
}

export default BadgeEdit;