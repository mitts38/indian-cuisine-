import React, { useContext } from "react"
import { FavoriteRecipeContext } from "./FavoriteRecipeProvider"
import FavoriteRecipes from "./FavoriteRecipe"
import "./FavoriteRecipe.css"

export default (props) => {
    const { favoriteRecipe } = useContext(FavoriteRecipeContext)

    return (
        <div className="favoriteRecipes">
            <h1>favoriteRecipes</h1>
            <article className="favoriteRecipeList">
                {favoriteRecipe.map(FavoriteRecipe => <FavoriteRecipes key={FavoriteRecipe.id} favoriteRecipe={favoriteRecipe} {...props} />)}
            </article>
        </div>
    )
}