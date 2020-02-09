import React, { useContext } from "react"
import { RecipeListContext } from "./RecipeListProvider"
import "./RecipeList.css"


export default ({ recipeList, match, history }) => {
    const { addRecipeList, deleteRecipeList, editRecipeList } = useContext(RecipeListContext)



    return (
        <section className="recipeList">
            <a href=""> recipe</a>
            <div className="recipeList__description">{recipeList.description}</div>
            <div className="recipeList__region">{recipeList.region}</div>


            <button className="btn--delete"
                onClick={() => {
                    addRecipeList(recipeList)

                }} >Add
            </button>



            <button className="btn--delete"
                onClick={() => {
                    deleteRecipeList(recipeList)

                }} >Delete
            </button>
            <button className="btn--favorite"
                onClick={() => {
                    editRecipeList(recipeList)
                    history.push("/recipeList")
                }} >Edit
            </button>
        </section>
    )
}
