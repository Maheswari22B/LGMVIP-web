import Users from "./Components/Card";
import './App.css';

import React, { Component } from 'react'
class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[],}
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      // document.getElementById("main").style.display='flex';
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (
    <>
    
      <nav>
          <div className="box">
            <div className="row">
            <div className="column1">
            <h2>Etsy</h2>
            </div>
            <div className="column2">
            <button onClick={this.updateState}>Get Users</button>
            </div>
            </div>
          </div>
        </nav>
        <div className="box2">
         <Users loading={this.state.loading} users={this.state.users_data}/>
         </div>
         <div className="row1"><h1><center>Welcome to etsy shop!!!</center></h1></div>
         <div class="bg_image">
           
      </div>
    </>
    )
  }
}
	
export default App;