import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      jokes: []
    };
  };

  componentDidMount(){
    const headers = { Authorization: localStorage.getItem('jwt') };

    axios.get('http://localhost:3300/api/jokes', {headers})
      .then(res => {
        console.log(res)
        this.setState({ jokes: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render(){
    return(
      <div>
        <h1> Jokes</h1>
          {this.state.jokes.map(joke => (
            <h3 key={joke.id}>{joke.joke}</h3>
          ))}

      </div>
    )
  }
}

export default Jokes;
