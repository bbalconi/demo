
// tag::vars[]
import React from 'react';
import ReactNative from 'react-native';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'mobx-react/native'
const axios = require('axios');

const DemoApp = DrawerNavigator({
  Home: { screen: Main  }
})

export default class App extends React.Component {

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
      <Provider>

      </Provider>
		)
	}
}

AppRegistry.registerComponent("Demo", () => App);

if (window.document) {
AppRegistry.runApplication('Demo', { rootTag: document.getElementById('react') })
}