import React, { useContext } from "react"
import { FavoriteRecipeContext } from "./FavoriteRecipeProvider"
import FavoriteRecipe from "./FavoriteRecipe"
import "./FavoriteRecipe.css"

export default (props) => {
    const { favoriteRecipes } = useContext(FavoriteRecipeContext)

    return (
        <div className="favoriteRecipes" className="center">
            <h1>FavoriteRecipe</h1>
            <button onClick={() => props.history.push("/favoriteRecipes/create")}>
                Add FavoriteRecipe
            </button>
            <article className="FavoriteRecipeList">
                {favoriteRecipes.map(favoriteRecipe => <FavoriteRecipe key={favoriteRecipe.id} favoriteRecipe={favoriteRecipe} {...props} />)}
            </article>
        </div>
    )
}
 