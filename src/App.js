import React from "react"
import './App.css';
import foods from "./foods.json"
import FoodBox from "./components/FoodBox";
import {Row, Button} from "antd"
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search"
import NoSearchResults from "./components/NoSearchResults";

function App() {
  const [viewFoods, setViewFoods] = React.useState(foods.slice(Math.floor(foods.length / 2)))
  const [searchInput, setSearchInput] = React.useState("")
  const [showAddFoodForm, setShowAddFoodForm] = React.useState(false)

  let searchRegex = searchInput === ""  ? new RegExp('.+') : new RegExp(searchInput, "i") 
  let filteredFoods = viewFoods.filter(food => food.name.match(searchRegex))
  return (
    <div className="App">      
      <div className="everythingDiv">
        <div className="inputs">
          {showAddFoodForm ? 
          [<AddFoodForm viewFoods={viewFoods} setViewFoods={setViewFoods}/>, 
          <Button className="showHideButton" htmlType="submit" type="primary" onClick={() => setShowAddFoodForm(!showAddFoodForm)}> Hide Form </Button>]: 
          <Button className="showHideButton" htmlType="submit" type="primary" onClick={() => setShowAddFoodForm(!showAddFoodForm)}> Add New Food </Button>}
          <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
        </div>
        <div>
          <Row>
            {filteredFoods.length > 0 ? 
              filteredFoods.map(food =>
                <FoodBox key={food.name} food={food} viewFoodsStuff={{viewFoods,setViewFoods}}/>) : 
              <NoSearchResults/>
            }
          </Row>
        </div>
      </div>

    </div>
  );
}

export default App;
