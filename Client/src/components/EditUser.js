import React from 'react';
import axios from 'axios';
import moment from "moment";

class EditUser extends React.Component{
   
    state={
        firstName:"",
        lastName:"",
        email:"",
        job:"",
        education:"",
        dateOfBirth:""
    }

    async componentDidMount() {
        const userId=this.props.match.params.userId
        //console.log(userId);
        const response=await axios.get(`https://localhost:44381/api/users/${userId}`);
        //console.log(response.data)

        const user=response.data;

        this.setState( {
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            job:user.job,
            education:user.education,
            dateOfBirth:user.dateOfBirth }
        )
    }
    onInputChange=(e)=>{
        //console.log(e.target.name);
        //console.log(e.target.value);

        this.setState({
            [e.target.name]:e.target.value
        })
    }
   handleFormSubmit=(e)=>{
       e.preventDefault();
       const{firstName,lastName,email, job,education,dateOfBirth}=this.state;

       const userId=this.props.match.params.userId;

       const updatedUser={
           firstName,
           lastName,
           email,
           job,
           education,
           dateOfBirth
       }
       this.props.onEditUser(userId,updatedUser);
       this.props.history.push('/');
       
   }
    render(){
        return (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="Edit." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Ad</label>
                        <input  type="text" 
                                className="form-control" 
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.onInputChange}/>
                    </div>
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Soyad</label>
                        <input  type="text" 
                                className="form-control" 
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.onInputChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="email">Email</label>
                        <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                value={this.state.email}
                                onChange={this.onInputChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Meslek</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="job"
                                value={this.state.job}
                                onChange={this.onInputChange}/>
                    </div>
                </div>
                 <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Dogum tarihi</label>
                        <input 
                                type="date" 
                                className="form-control" 
                                name="dateOfBirth"
                                value={moment(this.state.dateOfBirth).format("YYYY-MM-DD")}
                                onChange={this.onInputChange.bind(this)}/>
                    </div>
                </div> 
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Ögrenim</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="education"
                                value={this.state.education}
                                onChange={this.onInputChange}/>
                    </div>
                </div>
                
                <input type="submit" className="btn btn-danger btn-block" value="Edit User" />
            </form>
        </div>
        )
    }
}

export default EditUser;