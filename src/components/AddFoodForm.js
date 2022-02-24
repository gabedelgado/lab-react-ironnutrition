import { Divider, Input } from 'antd';
import React from "react"
// Iteration 4
function AddFoodForm({viewFoods, setViewFoods}) {
    let food = {name: "", image: "", calories: "", servings: ""}
    const [newFoodInputs, setNewFoodInputs] = React.useState(food)
    
    const addFood = () => {
        setViewFoods([...viewFoods].concat([newFoodInputs]))
        console.log(viewFoods)
    }
    
    return (
<div>
    
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input value={newFoodInputs.name} type="text" onChange={(e) => {setNewFoodInputs({...newFoodInputs,name: e.target.value})}} />
    
          <label>Image</label>
          <Input value={newFoodInputs.image} type="text" onChange={(e) => {setNewFoodInputs({...newFoodInputs,image: e.target.value})}} />
    
          <label>Calories</label>
          <Input value={newFoodInputs.calories} type="number" onChange={(e) => {setNewFoodInputs({...newFoodInputs,calories: e.target.value})}} />
    
          <label>Servings</label>
          <Input value={newFoodInputs.servings} type="number" onChange={(e) => {setNewFoodInputs({...newFoodInputs,servings: e.target.value})}} />
    
          <button onClick={addFood} >Create</button>
</div>


  );
}

export default AddFoodForm;
