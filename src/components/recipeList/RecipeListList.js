import React, { useContext } from "react"
import { RecipeListContext } from "./RecipeListProvider"
import RecipeList from "./RecipeList"
import "./RecipeList.css"

export default (props) => {
    const { recipesList } = useContext(RecipeListContext)

    return (
        <div className="recipeList" className="center">
            <h1>RecipesList</h1>
            <button onClick={() => props.history.push("/recipeList/create")}>
                Add Note
            </button>
            <article className="RecipeListList">
                {recipesList.map(recipeList => <RecipeList key={recipeList.id} recipeList={recipeList} {...props} />)}
            </article>
        </div>
    )
}
 