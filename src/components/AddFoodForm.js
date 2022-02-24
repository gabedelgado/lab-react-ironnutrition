import { Button, Divider, Input } from 'antd';
import React from "react"
// Iteration 4
function AddFoodForm({viewFoods, setViewFoods}) {
    let food = {name: "", image: "", calories: "", servings: ""}
    const [newFoodInputs, setNewFoodInputs] = React.useState(food)
    
    const addFood = (e) => {
      e.preventDefault()  
      setViewFoods([...viewFoods].concat([newFoodInputs]))
        console.log(viewFoods)
    }
    
    return (
<div className="foodInputs">
    
          <form>
            
            <div className='foodEntryDiv'>
              <Divider>Add Food Entry</Divider>
              
              <Input placeholder="Name" value={newFoodInputs.name} type="text" onChange={(e) => {setNewFoodInputs({...newFoodInputs,name: e.target.value})}} />
              
              <Input placeholder="Image URL" value={newFoodInputs.image} type="text" onChange={(e) => {setNewFoodInputs({...newFoodInputs,image: e.target.value})}} />
              
              <Input placeholder='Calories' value={newFoodInputs.calories} type="number" onChange={(e) => {setNewFoodInputs({...newFoodInputs,calories: e.target.value})}} />
              
              <Input placeholder='Servings' value={newFoodInputs.servings} type="number" onChange={(e) => {setNewFoodInputs({...newFoodInputs,servings: e.target.value})}} />
              
              <Button htmlType="submit" type="primary" onClick={(e) => addFood(e)}> Create </Button>
            </div>
          </form>
</div>


  );
}

export default AddFoodForm;
