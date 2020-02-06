import React, { useContext } from "react"
import { RecipeListContext } from "./RecipeListProvider"
import "./RecipeList.css"

export default ({ recipeList, match, history }) => {
    const { recipesList, deleteRecipeList } = useContext(RecipeListContext)

    return (
    <section className="recipeList">
    
        <div className="recipeList__text">{recipeList.RecipesList}</div>
        
    
         <button className="btn--delete"
                onClick={() => {
                deleteNote(recipeList)
                    .then(() => {
                        history.push("/recipeList")
                     })
                    }} >Delete
            </button>
    </section>
)}
