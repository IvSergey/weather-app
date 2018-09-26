import React, { Component } from 'react';

export default class WeatherDisplay extends Component {
    
    render() {
      return (
        <h1>Displaying some Weather! {this.props.zip}</h1>
      );
    }
  }
