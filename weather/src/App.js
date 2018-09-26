import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WeatherDisplay from "./Components/WeatherDisplay"

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];



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
        {PLACES.map((place, index) => (
          <button key={index} onClick={()=>{
            this.setState({activePlace: index});
          }}>
            {place.name}
          </button>
          ))}
          <WeatherDisplay 
            key={activePlace}
            zip={PLACES[activePlace].zip}
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
