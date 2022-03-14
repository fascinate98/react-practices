import React from "react";
import FoodList from "./FoodList";

const App = function(){


  const foods = [{
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
  


  return (
    <div id="App">
    <FoodList foods = {foods}/>
  </div>
  )
}

export default App