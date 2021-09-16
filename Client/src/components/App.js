import React from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import axios from "axios";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import UserDetail from "./UserDetail";
import alertify from "alertifyjs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    users: [],
    searchQuery: "",
  };

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    const response = await axios.get("https://localhost:44381/api/users");
    console.log(response);
    this.setState({ users: response.data });
  }

  deleteUser = async (user) => {
    axios.delete(`https://localhost:44381/api/users/delete/${user.userId}`);
    const newUserList = this.state.users.filter(
      (u) => u.userId !== user.userId
    );
    this.setState((state) => ({ users: newUserList }));
  };

  searchUser = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  addUser = async (user) => {
    await axios.post(`https://localhost:44381/api/users/add`, user);
    this.setState((state) => ({
      users: state.users.concat([user]),
    }));
    this.getUsers();
    alertify.success(
      user.firstName + " " + user.lastName + " adlı kullanıcı sisteme eklendi"
    );
  };

  editUser = async (userId, updatedUser) => {
    await axios.put(
      `https://localhost:44381/api/users/update/${userId}`,
      updatedUser
    );
    this.getUsers();
    alertify.success("Kullanıcı başarıyla güncellendi!");
  };

  render() {
    let filteredUsers = this.state.users.filter((user) => {
      let str=user.firstName +user.lastName;
      return (
       
          str.toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchUserProp={this.searchUser} />
                    </div>
                  </div>
                  <div className="row"> 
                  
                  
                    <UserList
                      users={filteredUsers}
                      deleteUserProp={this.deleteUser}
                    />
                 </div>
                </React.Fragment>
              )}
            ></Route>
            <Route
              path="/add"
              render={({ history }) => (
                <AddUser
                  onAddUser={(user) => {
                    this.addUser(user);
                    history.push("");
                  }}
                />
              )}
            ></Route>
            <Route
              path="/edit/:userId"
              render={(props) => (
                <EditUser
                  {...props}
                  onEditUser={(userId, user) => {
                    this.editUser(userId, user);
                  }}
                />
              )}
            ></Route>
            <Route
              path="/detail/:userId"
              render={(props) => (
                <UserDetail
                  {...props}
                  onEditUser={(userId, user) => {
                    this.editUser(userId, user);
                  }}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
