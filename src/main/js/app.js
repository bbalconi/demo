'use strict';

// tag::vars[]
import React from 'react';
const ReactDOM = require('react-dom');
const axios = require('axios');
// end::vars[]

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios.get('http://localhost:8080/api/employees').then((res) => {
      console.log(res)
    })
	}

	render() {
		return (
      <div>shit</div>
		)
	}
}
// end::employee[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]
