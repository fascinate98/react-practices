import React, { Component } from "react";
import FoodListItem from './FoodListItem';

export default class FoodList extends Component {
  //override
  render() {
    return (
        <ul>
        <FoodListItem name = "Egg" quanitity = "10"/>
        <FoodListItem name = "Milk" quanitity = "5"/>
        <FoodListItem name = "Bread" quanitity = "1"/>
      </ul>
    );
  }
}
