import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';



ReactDOM.render(<Car />, document.getElementById('root'));




class Carx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
      test: "default"
    };
  }
  shouldComponentUpdate() { //- shouldComponentUpdate : méthode à définir et à setter si on veut/ou pas modifier notre objet
    return false;
  }
  static getDerivedStateFromProps(props, state) {
	console.log("Avant render");
    return {test: state.test };
  }
  componentDidMount() {
	console.log("Apres render");
    setTimeout(() => {
      this.setState({test: "yellow"})
    }, 1000)
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
	console.log("render itself");
	let varrrr = (
      <div>
        <h1>My {this.state.brand} Car is {this.state.test} and {this.state.color}</h1>		
		<button type="button" onClick={this.changeColor}>Change color</button>		
      </div>
    )
	return varrrr
  }
}
//ReactDOM.render(<Car color="green" test="roma"/>, document.getElementById('root'));


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() { //The componentWillUnmount method is called when the component is about to be removed from the DOM.
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

// ReactDOM.render(<Container />, document.getElementById('root'));


//
class Footballxx extends React.Component {
  shoot() {
    alert("Great Shot!");
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}
// ReactDOM.render(<Football />, document.getElementById('root'));


//
class Footballxxx extends React.Component {
  shoot = () => {
    /*
    The 'this' keyword refers to the component object
    */
    alert(this);
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}
// ReactDOM.render(<Football />, document.getElementById('root'));


//
class Footballxxxx extends React.Component {
  shoot(a, b) {
    alert(a)
  }
  render() {
    return (
      <button onClick={this.shoot.bind(this, "teeest")}>Take the shot!</button>
    );
  }
}

// ReactDOM.render(<Football />, document.getElementById('root'));



class MyFormx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
      </form>
    );
  }
}
//ReactDOM.render(<MyForm />, document.getElementById('root'));

//textarea
class MyFormxx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'The content of a textarea goes in the value attribute'
    };
  }
  render() {
    return (
      <form>
      <textarea value={this.state.description} />
      </form>
    );
  }
}

//ReactDOM.render(<MyForm />, document.getElementById('root'));


//select
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mycar: 'Volvo'
    };
  }
  render() {
    return (
      <form>
      <select value={this.state.mycar}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      </form>
    );
  }
}

//ReactDOM.render(<MyForm />, document.getElementById('root'));


class MyHeaderx extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}
//ReactDOM.render(<MyHeader />, document.getElementById('root'));