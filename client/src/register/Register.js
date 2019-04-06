import React from 'react';
import axios from 'axios';

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:3300/api/register';

    axios.post(endpoint, this.state)
      .then(res => {
        console.log('response data', res)
        this.props.history.push('/login')
      })
      .catch(err => {
        console.log(err);
      })
  }

  render(){
    return(
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            type="text"
          />
          <label>Password</label>
          <input
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="text"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        </form>
      </div>
      )
    }
}

export default Register;
