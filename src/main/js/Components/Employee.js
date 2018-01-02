import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
const axios = require('axios')

var Employee = observer(class Employee extends Component {
  constructor() {
    super()
    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem() {
    console.log(this.props.userStore.data);
    let remove = this.props.item._links.employee.href;
    let array = this.props.userStore.data;
    axios.delete(`${remove}`).then((res) => {
    })
    array.forEach((item, i) => {
      if (item._links.employee.href === remove) {
        array.splice(i, 1);
      }
    })
  }

  render() {
    let item = this.props.item
    return (
      <tr>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.description}</td>
        <td><button onClick={this.deleteItem}>Delete Me!</button></td>
      </tr>
    );
  }
});

export default inject('userStore')(withRouter(Employee));
