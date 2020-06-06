import React from 'react';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="text-center">
      <Clock />
    </div>
  )
}


class Clock extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date();
    this.state = {
      time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    }
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    let now = new Date();
    this.setState({time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`})
  }


  render() {
    return (
      <div className="bg-light py-5">
        <h1>
         {this.state.time}
        </h1>
        
        <button className="btn- btn-warning px-5 py-5 mt-5 text-white font-weight-bold" onClick={this.refresh}>
          UPDATE
        </button>
      </div>
    )
  }
}

export default App;
