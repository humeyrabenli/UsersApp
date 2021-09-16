import React from "react";
import {Link} from 'react-router-dom';

const UserList =(props)=> {
  const getAge=(dateString)=>{
       var today=new Date();
       var bday=new Date(dateString);
       var age=today.getFullYear()- bday.getFullYear();
       var m = today.getMonth() - bday.getMonth();
       if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) 
       {
           age--;
       }
       return age;
  }
    return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ad</th>
              <th scope="col">Soyad</th>
              <th scope="col">Email</th>
              <th scope="col">Yaş</th>
              <th></th>
              
              
            </tr>
          </thead>
          <tbody>
            {props.users.map((user,i) => (
              <tr key={i}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{getAge(user.dateOfBirth)}</td>
                <td><button type="button" onClick={(event)=> props.deleteUserProp(user)} className="btn btn-danger">Delete</button>
                <Link type="button" style={{marginLeft:'10px'}} className="btn btn-md btn-outline-primary" to={`edit/${user.userId}`}>Edit</Link>
                <Link type="button" style={{marginLeft:'10px'}} className="btn btn-md btn-outline-primary" to={`detail/${user.userId}`}>Detay</Link>
                
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    );
  
}

export default UserList;
