import React, { Component } from "react";
import FoodList from "./FoodList";

export default class App extends Component {
  //override
  render() {
    return (
      <div id="App">
        <FoodList/>
      </div>
    );
  }
}
