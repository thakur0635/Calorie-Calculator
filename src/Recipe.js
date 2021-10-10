import React from 'react'

export const Recipe = ({title, ingredient, cal ,image}) => {
    return (
        <div className = "card">
            <h1 className ="name">{title}</h1>
            <img src={image} alt="" className = "photo" />
            <h2 className = "calo">Calories: {cal}</h2>
            <h4 className="ingi">Ingredients required:</h4>
            <ul className = "lists">
                {ingredient.map(ingre => (
                    <li>{ingre.text}</li>
                ))}
            </ul>
        </div>
    )
}
