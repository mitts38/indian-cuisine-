import React, { useContext, useRef } from "react"
import { FavoriteRecipeContext } from "./FavoriteRecipeProvider"
import "./FavoriteRecipe"

export default props => {
    const { addFavoriteRecipe } = useContext(FavoriteRecipeContext)
    const FavoriteRecipeId = useRef("")
    const FavoriteRecipeUserId = useRef("")
    const FavoriteRecipeRecipeId = useRef("")



    const constructNewFavoriteRecipe = () => {
        addFavoriteRecipe({
            id: FavoriteRecipeId.current.value,
            userid: FavoriteRecipeUserId.current.value,
            recipeid: FavoriteRecipeRecipeId.current.value,



        })
    }


    return (
        <form className="FavoriteRecipeForm">
            <h2 className="FavoriteRecipeForm__title">Favorite Recipe</h2>
            <div className="form-group">
                <label htmlFor="favoriteRecipeId"> id </label>
                <input
                    type="text"
                    id="favoriteRecipeId"
                    ref={FavoriteRecipeId}
                    required
                    autoFocus
                    className="form-control"
                    placeholder=""
                />
                <label htmlFor="favoriteRecipeUserId"> User Id </label>
                <input
                    type="text"
                    id="favoriteRecipeId"
                    ref={FavoriteRecipeUserId}
                    required
                    autoFocus
                    className="form-control"
                    placeholder=""
                />
                <label htmlFor="favoriteRecipeRecipeId"> Recipe Id </label>
                <input
                    type="text"
                    id="favoriteRecipeRecipeId"
                    ref={FavoriteRecipeRecipeId}
                    required
                    autoFocus
                    className="form-control"
                    placeholder=""
                />
            </div>

            <button type="submit"
                onClick={
                    fav => {
                        fav.preventDefault() // Prevent browser from submitting the form
                        constructNewFavoriteRecipe()
                    }
                }
                className="btn btn-primary">
                Save FavoriteRecipe
            </button>
        </form>
    )
}