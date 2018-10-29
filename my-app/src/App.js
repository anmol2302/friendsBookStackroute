import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css'
import axios from 'axios';

class App extends Component {

//   state={
//     user:[]
//   }
  componentDidMount()
  {
    axios.get('http://localhost:8081/rest/neo4j/user/allUser')
    .then(user => {
        this.setState({
            users: user.data
        });
        console.log(user)
    });
  }
//   newUser(event)
//   {
//     this.setState({
//       userName:event.target.value

//     })
//   }
//   handleNewUser(event)
//   {
// event.preventDefault()
// const newUser={
//   name:this.state.userName
// }
// axios.getpost('http://localhost:8081/rest/neo4j/user/addUser',newUser)
// console.log(newUser)
//   }
  render() {
    return (
      <div id="main"><label>Email Id:</label>
      {/* <form onChange={this.handleNewUser.bind(this)}> */}
            <input type="text"  placeholder="Enter email@Id"/>
            <div>
            <button type="submit"  value=""><Link to="/next-page" id="link">Submit</Link></button>
             </div>
             {/* </form> */}
         </div>
    );
  }
}

export default App;
