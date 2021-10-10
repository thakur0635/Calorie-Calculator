import React, {useEffect, useState} from "react";
import { Recipe } from "./Recipe";
import "./App.css"


let App = ()=>{
  const [tit, setTit] = useState('');
  const [q, setq] = useState('chicken');
   const[recipies,setrecipies]= useState([]);
   useEffect(()=>{
     getrecipies(); //eslint-disable-next-line
   },[q])
   let getrecipies = async ()=>{
     const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=0c2729d4&app_key=47ee5a420cb7421ba296182f37650db6`);
     const data = await response.json();
     setrecipies(data.hits);
   }
   const updatesearch = e=>{
     setTit(e.target.value);
   }
   const newval = e=>{
     setq(tit);
   }
 return(
   <div className = "containor">
     <div className="welcome">
       <span>Welcome!!! You can search any dish here for required ingredients and calories</span>
     </div>
     <div className="search_bar">
    <input type="text" className="search-rec" placeholder =" Search your dishes!!! Given some chicken dishes below" value ={tit} onChange ={updatesearch} />
    <button className="search-button" onClick ={newval} >Search</button>
    </div>
    <div className="main">
    {
    recipies.map(recipe => (
      <Recipe 
      key={recipe.recipe.calories} 
      title ={recipe.recipe.label} 
      cal = {recipe.recipe.calories} 
      image={recipe.recipe.image} 
      ingredient ={recipe.recipe.ingredients}/ 
      >
    )
    )}
    </div>
   </div>
 );
}
export default App;
