
import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class App extends React.Component {

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

ReactDOM.render(<App />, document.getElementById('react'));

