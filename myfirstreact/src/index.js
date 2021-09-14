import React from 'react';
import ReactDOM from 'react-dom';


class Car extends React.Component {
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
  static getDerivedStateFromProps(props, state) {
	console.log("Avant render");
    // return {test: props.test };
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
    return (
      <div>
        <h1>My {this.state.brand} Car is {this.state.test} and {this.state.color}</h1>		
		<button type="button" onClick={this.changeColor}>Change color</button>		
      </div>
    );
  }
}

ReactDOM.render(<Car color="green" test="roma"/>, document.getElementById('root'));