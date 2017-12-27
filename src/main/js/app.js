
// tag::vars[]
import React from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'
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

if (window.document) {
AppRegistry.runApplication('demo', { rootTag: document.getElementById('react') })
}
