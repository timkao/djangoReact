import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
    .then(res => {
      console.log(res.data)
      this.setState({list: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
