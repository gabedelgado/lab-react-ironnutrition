import React from "react"
import './App.css';
import foods from "./foods.json"
import FoodBox from "./components/FoodBox";
import {Row} from "antd"
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search"

function App() {
  const [viewFoods, setViewFoods] = React.useState(foods.slice(Math.floor(foods.length / 2)))
  const [searchInput, setSearchInput] = React.useState("")
  
  let searchRegex = searchInput === ""  ? new RegExp('.+') : new RegExp(searchInput, "i") 

  return (
    <div className="App">
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <Row>
        {viewFoods.filter(food => {
          console.log(food.name.match(searchRegex))
          console.log("REGEX: ", searchRegex)
          return food.name.match(searchRegex)}).map(food => 
           <FoodBox key={food.name} food={food}/>
        )}
      </Row>      
      <AddFoodForm viewFoods={viewFoods} setViewFoods={setViewFoods}/>
    </div>
  );
}

export default App;
