import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WeatherDisplay from "./Components/WeatherDisplay";
import "bootstrap/dist/css/bootstrap.css";


// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

const PLACES = [
  { name: "Palo Alto"},
  { name: "San Jose"},
  { name: "Santa Cruz"},
  { name: "Honolulu"}
];
console.log(PLACES)
const city = document.querySelector ("#city");

class App extends Component {
  constructor() {
    super();
    this.state={
      activePlace:0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <input type="text" id="city"></input>
          <button onClick={()=>{
            PLACES.push(city.value)
          }}>Добавить</button>
        {PLACES.map((place, index) => (
          <button key={index} onClick={()=>{
            this.setState({activePlace: index});
          }}>
            {place.name}
          </button>
          ))}
          <WeatherDisplay 
            key={activePlace}
            name={PLACES[activePlace].name}
          />
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
