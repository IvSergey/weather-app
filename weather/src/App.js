import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WeatherDisplay from "./Components/WeatherDisplay";
import "bootstrap/dist/css/bootstrap.css";


// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

// const PLACES = [
//   { name: "Palo Alto"},
//   { name: "San Jose"},
//   { name: "Santa Cruz"},
//   { name: "Honolulu"}
// ];
// console.log(PLACES)


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
    });
}

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <input type="text" id="city_name" placeholder="City name"></input>
          
        {this.state.city.map((place, index) => (
          <button key={index} onClick={()=>{
            this.setState({activePlace: index});
          }}>
            {place.name}
          </button>
          ))}
          
      </div>
    );
  }
}

// let WeatherDisplay = (props) => {

//         return (
//           <button>{props.place.name}</button>
//         );  
      
// }

// class WeatherDisplay extends Component {
//   render() {
//     return  <h1>Displaying weather for city {this.props.zip}</h1>;
       
//   }
// }

export default App;
