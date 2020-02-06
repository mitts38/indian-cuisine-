import React, { useContext } from "react"
import  {FavoriteRecipeContext}  from "./FavoriteRecipeProvider"
import "./FavoriteRecipe.css"

export default ({ favoriteRecipes, match, history }) => {
    const { favoriteRecipe, deleteFavoriteRecipe } = useContext(FavoriteRecipeContext)

    return (
    <section className="favoriteRecipe">
        <h3 className="favoriteRecipe__Id">{favoriteRecipe.Id}</h3>
        <div className="favoriteRecipe__userId">{favoriteRecipe.userId}</div>
        <div className="favoriteRecipe__recipeId">{favoriteRecipe.recipeId}</div>
         <button className="btn--delete"
                onClick={() => {
                deleteFavoriteRecipe(favoriteRecipe)
                    .then(() => {
                        history.push("/")
                     })
                    }} >Delete
            </button>
    </section>
)}