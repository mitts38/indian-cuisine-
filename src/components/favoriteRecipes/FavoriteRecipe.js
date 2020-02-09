import React, { useContext } from "react"
import { FavoriteRecipeContext } from "./FavoriteRecipeProvider"
import "./FavoriteRecipe.css"

export default ({ favoriteRecipe, match, history }) => {
    const {  deleteFavoriteRecipe } = useContext(FavoriteRecipeContext)

    return (
    <section className="favoriteRecipe">
    
        <div className="favoriteRecipe__text">{favoriteRecipe.id}</div>
        
    
         <button className="btn--delete"
                onClick={() => {
                deleteFavoriteRecipe(favoriteRecipe)
                    .then(() => {
                        history.push("/favoriteRecipes")
                     })
                    }} >Delete
            </button>
    </section>
)}
