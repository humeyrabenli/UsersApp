import React from 'react';
import serialize from 'form-serialize'

class AddUser extends React.Component{

   handleFormSubmit=(e)=>{
       e.preventDefault();
       const newUser=serialize(e.target, {hash:true})
       this.props.onAddUser(newUser);
   }
    render(){
        return (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit} style={{marginLeft:'350px'}} >
                
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label htmlFor="inputName">Ad</label>
                        <input  type="text" 
                                className="form-control" 
                                name="firstName"/>
                    </div>
                    <div className="form-group col-md-5 mt-2">
                        <label htmlFor="inputName">Soyad</label>
                        <input  type="text" 
                                className="form-control" 
                                name="lastName"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-5 mt-2">
                        <label htmlFor="email">Email</label>
                        <input 
                                type="email" 
                                className="form-control" 
                                name="email"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-5 mt-2">
                        <label htmlFor="inputImage">Meslek</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="job"/>
                    </div>
                </div>
                 <div className="form-row">
                    <div className="form-group col-md-3 mt-2">
                        <label htmlFor="inputImage">Doğum tarihi</label>
                        <input 
                                type="date" 
                                className="form-control" 
                                name="dateOfBirth"/>
                    </div>
                </div> 
                <div className="form-row">
                    <div className="form-group col-md-5 mt-2">
                        <label htmlFor="inputImage">Öğrenim Durumu</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="education"/>
                    </div>
                </div> 
                
                <input type="submit" className="btn btn-danger btn-block mt-2" value="Kullanıcı Ekle" />
                
            </form>
        </div>
        )
    }
}

export default AddUser;