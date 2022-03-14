import React, { Component } from "react";
import FoodList from "./FoodList";

export default class App extends Component {

  constructor(){
    super(arguments);

    this.foods=[
    {
      no:1,
      name:"Bread",
      quantity: 40
    },

    {
      no:2,
      name:"Milk",
      quantity: 20
    },
    
    {
      no:1,
      name:"Egg",
      quantity: 10
    }];
  }

  //override
  render() {
    return (
      <div id="App">
        <FoodList foods = {this.foods}/>
      </div>
    );
  }
}
