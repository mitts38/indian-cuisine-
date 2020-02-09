import React, { useContext, useRef } from "react"
import { FavoriteRecipeContext } from "./FavoriteRecipeProvider"
import { UserContext } from "../users/UserProvider"
import "./FavoriteRecipe"

export default props => {
    const { user } = useContext(UserContext)
    const { addFavoriteRecipe } = useContext(FavoriteRecipeContext)
    const FavoriteRecipe = useRef("")

    const foundFavoriteRecipeUser = user.find(singleUser => singleUser.id === parseInt(localStorage.getItem("currentUser")))
    console.log(foundFavoriteRecipeUser)
    const constructNewFavoriteRecipe = () => {
        addFavoriteRecipe({
        
            recipeId: FavoriteRecipe.current.value,
            userId: parseInt(localStorage.getItem("currentUser")),

        })
    }

    return (
        <form className="favoriteRecipeForm">
            <h2 className="eventForm__title">New FavoriteRecipe</h2>
            <div className="form-group">
                <label htmlFor="favoriteRecipe">favoriteRecipe</label>
                <input
                    type="id"
                    id="favoriteRecipe"
                    ref={FavoriteRecipe}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="favoriteRecipe"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewFavoriteRecipe()
                        props.history.push("/favoriteRecipes")
                    }
                }
        
                className="btn btn-primary">
                Save FavoriteRecipe
            </button>
        </form>
    )
}
