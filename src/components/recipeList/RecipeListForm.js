import React, { useContext, useRef } from "react"
import { RecipeListContext } from "./RecipeListProvider"
import { UserContext } from "../users/UserProvider"
import "./RecipeList"

export default props => {
    const { user } = useContext(UserContext)
    const { addRecipeList } = useContext(RecipeListContext)
    const RecipesListRecipe = useRef("")
    const RecipesListUrl = useRef("")
    const RecipesListDescription = useRef("")
    const RecipesListRegion = useRef("")

    const foundNoteUser = user.find(singleUser => singleUser.id === parseInt(localStorage.getItem("currentUser")))
    console.log(foundRecipeListUser)
    const constructNewRecipeList = () => {
        addRecipeList({
            recipe: RecipesListRecipe.current.value,
            url: RecipesListUrl.current.value,
            description: RecipesListDescription.current.value,
            region: RecipesListRegion.current.value,
            

        })
    }

    return (
        <form className="recipeListForm">
            <h2 className="eventForm__title">New Recipe</h2>
            <div className="form-group">
                <label htmlFor="recipesList">Recipelist RECIPE</label>
                <input
                    type="text"
                    id="recipeList"
                    ref={recipesListRecipe}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="recipeList"
                />
                <label htmlFor="recipesList">Recipelist URL</label>
                <input
                    type="text"
                    id="recipeList"
                    ref={RecipesListUrl}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="recipeList"
                />
                <label htmlFor="recipesList">Recipelist Description</label>
                <input
                    type="text"
                    id="recipeList"
                    ref={RecipesListDescription}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="recipeList"
                />
                <label htmlFor="recipesList">Recipelist Region</label>
                <input
                    type="text"
                    id="recipeList"
                    ref={RecipesListRegion}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="recipeList"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewNote()
                    }
                }
                className="btn btn-primary">
                Save Recipe
            </button>
        </form>
    )
}
