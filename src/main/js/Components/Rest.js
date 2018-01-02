import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Employee from './Employee';
const axios = require('axios')

var Rest = observer(class Rest extends Component {
  constructor() {
    super()
    this.firstNameChange = this.firstNameChange.bind(this)
    this.lastNameChange = this.lastNameChange.bind(this)
    this.identityChange = this.identityChange.bind(this)
    this.postFunction = this.postFunction.bind(this)
    this.state = {
      firstName: '',
      lastName: '',
      identity: '',
      data: []
    }
  }

  firstNameChange(e) {
    this.setState({ firstName: e.target.value })
  }

  lastNameChange(e) {
    this.setState({ lastName: e.target.value })
  }

  identityChange(e) {
    this.setState({ identity: e.target.value })
  }

  postFunction(first, last, id){
    axios.post('/api/employees', {
      firstName: first, 
      lastName: last, 
      description: id}).then((res) => {
        console.log(res.data);
        this.props.userStore.data.push(res.data);
      })
  }


  render() {
    let array = this.props.userStore.data;
    let renderArray = array.map((item) => {
      return (
        <Employee item={item}/>
      )
    })
    return (
      <Div>

        <input
          placeholder="firstName"
          onChange={this.firstNameChange}
          value={this.state.firstName}
        />
        <input
          placeholder="lastName"
          onChange={this.lastNameChange}
          value={this.state.lasttName}
        />
        <input
          placeholder="identity"
          onChange={this.identityChange}
          value={this.state.identity}
        />
        <button onClick={() => this.postFunction(this.state.firstName, this.state.lastName, this.state.identity)}>Post Data</button>
        <table>
        <tr><th>First Name</th><th>Last Name</th><th>Description</th></tr>
        <tbody>{renderArray}</tbody>
        </table>
      </Div>
    );
  }
});

export default inject('userStore')(withRouter(Rest));


const Div = styled.div`
margin-top:400px;`