import React from 'react';
import axios from 'axios';

class UserDetail extends React.Component{
   
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
            dateOfBirth:new Date(user.dateOfBirth).toLocaleDateString() }
        )
    }
   
   
    render(){
        return (
            <div className="jumbotron jumbotron-fluid" >
            <div className="container" style={{alignItems:'center'}}>
              <div className="row">
                  
                  <div className="col-12 offset-2">
                     <h3>Ad: {this.state.firstName}</h3>
                     <h3>Soyad: {this.state.lastName}</h3>
                     <h3>Email: {this.state.email}</h3>
                     <h3>Doğum Tarihi: {this.state.dateOfBirth}</h3> 
                     <h3>Öğrenim Durumu: {this.state.education}</h3>
                     <h3>Meslek: {this.state.job}</h3>

                  </div>
              </div>
           
            </div>

        </div>
        
        )
    }
}

export default UserDetail;