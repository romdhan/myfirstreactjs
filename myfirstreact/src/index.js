import React from 'react';
import ReactDOM from 'react-dom';


class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

class Car2 extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

class Car3 extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

function CarClass() {
  return <h2>Hi, I am also a Car!</h2>;
}

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const myfirstelement = <h1>Hello React!</h1>

// ReactDOM.render(<Car2 />, document.getElementById('root'));
ReactDOM.render(<Car3 color="green"/>, document.getElementById('root'));