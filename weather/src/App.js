import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WeatherDisplay from "./Components/WeatherDisplay";
import "bootstrap/dist/css/bootstrap.css";



class App extends Component {
  constructor() {
    super();
    this.state={
      activePlace:0,
      city:[]
    };
  }

  handlerAddCity = () => {

    let name = document.getElementById('city_name');
    console.log(name.value);
    this.setState({
        city: [
            ...this.state.city,
            { name: name.value}
        ]
    })
}

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <input type="text" id="city_name" placeholder="City name"></input>
         <button onClick={this.handlerAddCity}>Add City</button>
         <br /> 
        {this.state.city.map((place, index) => (
          <button key={index} onClick={()=>{
            this.setState({activePlace: index});
          }}>
            {place.name}
          </button>
        ))}
          {this.state.city[0] ? (<WeatherDisplay
            key={activePlace}
            name={this.state.city[activePlace].name}
          />) : "we have not city"}
      </div>
    );
  }
}

export default App;
